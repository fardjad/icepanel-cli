/* eslint-disable no-await-in-loop, camelcase */
import { operationIds } from "./operation-ids.mjs";
import { kebabCase } from "change-case";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FileGenerator } from "templgen";

const sourceDirectory = fileURLToPath(
  new URL("templates/client", import.meta.url),
);
const targetDirectory = fileURLToPath(
  new URL("../src/icepanel-client", import.meta.url),
);

const fileGenerator = new FileGenerator({ templateExtension: ".ejs" });

for (const operationId of operationIds) {
  const variables = {
    operation_filename: kebabCase(operationId),
  };

  await fileGenerator.generate(
    sourceDirectory,
    targetDirectory,
    [path.join(sourceDirectory, "__operation_filename__.ts.ejs")],
    variables,
  );
}

await fileGenerator.generate(
  sourceDirectory,
  targetDirectory,
  [path.join(sourceDirectory, "index.ts.ejs")],
  { operationIds },
);
