/* eslint-disable no-await-in-loop */
import { kebabCase, pascalCase } from "change-case";
import "http-status-codes";
import { getReasonPhrase } from "http-status-codes";
import { JSONPath as jsonPath } from "jsonpath-plus";
import fs from "node:fs";
import {
  quicktype,
  InputData,
  JSONSchemaInput,
  FetchingJSONSchemaStore,
} from "quicktype-core";
import yaml from "yaml";

const oasParametersToJsonSchema = (parameters, in_) => {
  const queryParameters = parameters.filter(
    (parameters) => parameters.in === in_,
  );

  if (queryParameters.length === 0) {
    return;
  }

  const parametersSchema = {
    type: "object",
    additionalProperties: true,
    properties: Object.fromEntries(
      queryParameters.map(({ name, schema }) => [name, schema]),
    ),
    required: [
      ...new Set(
        queryParameters
          .filter(({ required }) => required)
          .map(({ name }) => name),
      ),
    ],
  };

  return parametersSchema;
};

const createQueryUrlTemplate = (parameters) => {
  const variables = parameters
    .filter((parameter) => parameter.in === "query")
    .map(({ name, explode }) => `${name}${explode ? "*" : ""}`)
    .join(",");

  return `{?${variables}}`;
};

const quicktypeJSONSchema = async (sources) => {
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());
  for (const { name, schema } of sources) {
    await schemaInput.addSource({ name, schema });
  }

  const inputData = new InputData();
  inputData.addInput(schemaInput);

  return quicktype({
    inputData,
    lang: "typescript",
    rendererOptions: {
      "just-types": true,
      "runtime-typecheck": false,
      "prefer-types": true,
      "prefer-unions": true,
      "acronym-style": "original",
    },
  });
};

// We can simplify the type generation logic by keeping the following assumptions in mind:
// 1. All endpoints use application/json content type
// 2. All query strings are RFC 6570 expandable
// 3. Only JSON schema is used for defining parameters, request bodies, and responses (content keyword is not used)
// 4. The default header and cookie parameters serialization schemes are used (this implementation does not emit metadata needed for supporting other schemes)
// 5. Each endpoint can have at most 1 successful response (status code >= 200 and < 300)
// 6. Generated clients don't need to return typed error responses

const typesDirectory = new URL("../src/icepanel-client/types", import.meta.url);
fs.mkdirSync(typesDirectory, { recursive: true });

const oas = yaml.parse(
  fs.readFileSync(new URL("../api.oas.yml", import.meta.url), "utf8"),
);

const operationIds = ["diagramsList", "diagramContentFind"];

// A prefix to avoid name collisions with other types
const generationPrefix = "OAS";

for (const operationId of operationIds) {
  const operation = jsonPath({
    path: `$.paths.*[?(@.operationId === '${operationId}')]`,
    json: oas,
  })[0];

  const operationMethod = jsonPath({
    path: `$.paths.*[?(@.operationId === '${operationId}')]~`,
    json: oas,
  })[0].toUpperCase();

  const pathParameters = jsonPath({
    path: `$.paths.*[?(@.operationId === '${operationId}')]^.parameters`,
    json: oas,
  })[0];
  const mergedParameters = [
    ...(pathParameters ?? []),
    ...(operation.parameters ?? []),
  ];

  const operationPath = jsonPath({
    path: `$.paths.*[?(@.operationId === '${operationId}')]^~`,
    json: oas,
  })[0];
  const queryUrlTemplate = createQueryUrlTemplate(mergedParameters);

  const inPathParametersSchema = oasParametersToJsonSchema(
    mergedParameters,
    "path",
  );

  const inQueryParametersSchema = oasParametersToJsonSchema(
    mergedParameters,
    "query",
  );

  const inHeaderParametersSchema = oasParametersToJsonSchema(
    mergedParameters,
    "header",
  );

  const inCookieParametersSchema = oasParametersToJsonSchema(
    mergedParameters,
    "cookie",
  );

  const requestBodySchema = jsonPath({
    path: "$.requestBody.content['application/json'].schema",
    json: operation,
  })[0];

  const statusCodes =
    jsonPath({
      path: "$.responses.*.content['application/json'].schema^^^~",
      json: operation,
    }) ?? [];
  const responseBodySchemas =
    jsonPath({
      path: "$.responses.*.content['application/json'].schema",
      json: operation,
    }) ?? [];
  const responseBodySchemaPairs = statusCodes
    .map((statusCode, index) => ({
      statusCode,
      schema: responseBodySchemas[index],
    }))
    // Sort the pairs by status code but put the first status code that is >= 200 and < 300 first
    .sort(({ statusCode: statusCodeA }, { statusCode: statusCodeB }) => {
      if (statusCodeA >= 200 && statusCodeA < 300) {
        return -1;
      }

      if (statusCodeB >= 200 && statusCodeB < 300) {
        return 1;
      }

      return statusCodeA - statusCodeB;
    });
  const hasSuccessfulResponse =
    responseBodySchemaPairs.length > 0 &&
    responseBodySchemaPairs[0].statusCode >= 200 &&
    responseBodySchemaPairs[0].statusCode < 300;

  const inPathParametersSource = {
    name: `${generationPrefix}PathParameters`,
    schema: JSON.stringify({
      ...inPathParametersSchema,
      components: oas.components,
    }),
  };

  const inQueryParametersSource = {
    name: `${generationPrefix}QueryParameters`,
    schema: JSON.stringify({
      ...inQueryParametersSchema,
      components: oas.components,
    }),
  };

  const inHeaderParametersSource = {
    name: `${generationPrefix}HeaderParameters`,
    schema: JSON.stringify({
      ...inHeaderParametersSchema,
      components: oas.components,
    }),
  };

  const inCookieParametersSource = {
    name: `${generationPrefix}CookieParameters`,
    schema: JSON.stringify({
      ...inCookieParametersSchema,
      components: oas.components,
    }),
  };

  const requestBodySource = {
    name: `${generationPrefix}RequestBody`,
    schema: JSON.stringify({
      ...requestBodySchema,
      components: oas.components,
    }),
  };

  const responseSources = responseBodySchemaPairs.map(
    ({ statusCode, schema }) => ({
      name: `${generationPrefix}${pascalCase(
        getReasonPhrase(statusCode),
      )}Response`,
      schema: JSON.stringify({ ...schema, components: oas.components }),
    }),
  );

  const sources = [
    inPathParametersSource,
    inQueryParametersSource,
    inHeaderParametersSource,
    inCookieParametersSource,
    requestBodySource,
    ...responseSources,
  ].filter((source) => source.schema !== undefined);

  const { lines: quickTypeLines } = await quicktypeJSONSchema(sources);
  const fileName = new URL(`${typesDirectory}/${kebabCase(operationId)}.ts`);

  const outputFileHeaderLines = [
    "// This file is generated from /api.oas.yml",
    "// Changes made to this file will be lost upon regeneration",
    "// Typos in this file are potentially related to this issue: https://github.com/glideapps/quicktype/issues/1678",
    "",
  ];

  const operationMethodLine = `export const operationMethod = "${operationMethod}";`;

  const urlTemplateLines = [
    `export const pathUrlTemplate = ${JSON.stringify(operationPath)};`,
    `export const queryUrlTemplate = ${JSON.stringify(queryUrlTemplate)};`,
    "",
  ];

  const combinedResponsesTypeIdentifier = `${generationPrefix}Response`;
  const combinedResponsesTypeLine = `type ${combinedResponsesTypeIdentifier} = ${
    responseSources.length > 0
      ? responseSources.map(({ name }) => `${name}`).join(" | ")
      : undefined
  };`;

  const successfulResponseTypeIdentifier = `${generationPrefix}SuccessfulResponse`;
  const successfulResponseTypeLine = `type ${successfulResponseTypeIdentifier} = ${
    hasSuccessfulResponse ? responseSources[0].name : "undefined"
  };`;

  const names = [
    ...sources.map(({ name }) => name),
    combinedResponsesTypeIdentifier,
    successfulResponseTypeIdentifier,
  ];
  const commaSeparatedAliases = names
    .map((name) => `${name} as ${name.slice(generationPrefix.length)}`)
    .join(", ");
  const exportTypeLine = `export type { ${commaSeparatedAliases} };`;

  // QuickType does not generate types for empty JSON schemas
  const undefinedTypeLines = [
    inPathParametersSchema
      ? undefined
      : `type ${generationPrefix}PathParameters = { [property: string]: any };`,
    inQueryParametersSchema
      ? undefined
      : `type ${generationPrefix}QueryParameters = { [property: string]: any };`,
    inHeaderParametersSchema
      ? undefined
      : `type ${generationPrefix}HeaderParameters = { [property: string]: any };`,
    inCookieParametersSchema
      ? undefined
      : `type ${generationPrefix}CookieParameters = { [property: string]: any };`,
    requestBodySchema
      ? undefined
      : `type ${generationPrefix}RequestBody = undefined;`,
  ]
    .filter(Boolean)
    .join("\n");

  fs.writeFileSync(
    fileName,
    [
      ...outputFileHeaderLines,
      operationMethodLine,
      ...urlTemplateLines,
      ...quickTypeLines.map((line) =>
        // Remove the export keyword from the generated types
        line.replace(/^export (type [^ ]+ = )/, "$1"),
      ),
      combinedResponsesTypeLine,
      successfulResponseTypeLine,
      undefinedTypeLines,
      exportTypeLine,
    ].join("\n"),
    "utf8",
  );
}
