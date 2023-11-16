import { request as listDiagrams } from "./list-diagrams.ts";
import { Cookie } from "tough-cookie";
import { type Template, parseTemplate } from "url-template";

type TemplateVariables = Parameters<Template["expand"]>[0];

export type RequestOptions<
  PathParameters = unknown,
  QueryParameters = unknown,
  HeaderParameters = unknown,
  CookieParameters = unknown,
  RequestBody = unknown,
> = {
  pathParameters?: PathParameters;
  queryParameters?: QueryParameters;
  headerParameters?: HeaderParameters;
  cookieParameters?: CookieParameters;
  requestBody?: RequestBody;
};

export class IcePanelClient {
  listDiagrams = listDiagrams;

  public baseUrl: string;
  public apiKey: string;

  public fetchFunction = async (...arguments_: Parameters<typeof fetch>) =>
    fetch(...arguments_);

  protected makeUrl(
    pathUrlTemplate: string,
    pathVariables: TemplateVariables,
    queryUrlTemplate: string,
    queryVariables: TemplateVariables,
  ) {
    const parsedPathUrlTemplate = parseTemplate(pathUrlTemplate);
    const parsedQueryUrlTemplate = parseTemplate(queryUrlTemplate);

    return new URL(
      `${this.baseUrl}${parsedPathUrlTemplate.expand(
        pathVariables,
      )}${parsedQueryUrlTemplate.expand(queryVariables)}`,
    ).toString();
  }

  // TODO: Add support for more advanced headers and cookies serialization
  protected makeHeaders(
    headerParameters: Record<string, string>,
    cookieParameters: Record<string, string>,
  ) {
    const headers = new Headers();
    headers.set("Authorization", `ApiKey ${this.apiKey}`);

    for (const [key, value] of Object.entries(headerParameters)) {
      headers.set(key, value);
    }

    if (Object.keys(cookieParameters).length > 0) {
      headers.set("Cookie", Cookie.fromJSON(cookieParameters)!.toString());
    }

    return headers;
  }
}

export const icePanelClient = new IcePanelClient();
