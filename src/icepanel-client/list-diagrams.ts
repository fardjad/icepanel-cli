import { type RequestOptions, type IcePanelClient } from "./index.ts";
import {
  type PathParameters,
  type QueryParameters,
  type HeaderParameters,
  type CookieParameters,
  type RequestBody,
  type Response,
  pathUrlTemplate,
  queryUrlTemplate,
  operationMethod,
} from "./types/diagrams-list.ts";
import createError from "http-errors";

export async function request(
  this: IcePanelClient,
  requestOptions: RequestOptions<
    PathParameters,
    QueryParameters,
    HeaderParameters,
    CookieParameters,
    RequestBody
  >,
): Promise<Response> {
  const response = await this.fetchFunction(
    this.makeUrl(
      pathUrlTemplate,
      requestOptions.pathParameters ?? {},
      queryUrlTemplate,
      requestOptions.queryParameters ?? {},
    ),
    {
      method: operationMethod,
      headers: this.makeHeaders(
        requestOptions.headerParameters ?? {},
        requestOptions.cookieParameters ?? {},
      ),
    },
  );

  if (response.status !== 200) {
    throw createError(response.status, await response.text());
  }

  return response.json() as Promise<Response>;
}
