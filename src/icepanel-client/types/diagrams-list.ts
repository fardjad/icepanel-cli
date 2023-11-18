// This file is generated from /api.oas.yml
// Changes made to this file will be lost upon regeneration
// Typos in this file are potentially related to this issue: https://github.com/glideapps/quicktype/issues/1678

export const operationMethod = "GET";
export const pathUrlTemplate = "/landscapes/{landscapeId}/versions/{versionId}/diagrams";
export const queryUrlTemplate = "{?test,filter}";

type OASPathParameters = {
    landscapeId: string;
    versionId:   string;
    [property: string]: any;
}

type OASQueryParameters = {
    filter?: Ter;
    test?:   string;
    [property: string]: any;
}

type Ter = {
    domainId?: string;
    labels?:   { [key: string]: string };
    modelId?:  string;
    name?:     string;
    status?:   Status;
    type?:     OASQueryParameter[] | OASQueryParameter;
    [property: string]: any;
}

type Status = "current" | "draft";

type OASQueryParameter = "context-diagram" | "app-diagram" | "component-diagram";

type OASHeaderParameters = {
    Authorization: string;
    [property: string]: any;
}

type OASOkResponse = {
    diagrams: OASOkRespons[];
    [property: string]: any;
}

type OASOkRespons = {
    commit:       number;
    createdAt:    Date;
    createdBy:    CreatedBy;
    createdById:  string;
    deletedAt?:   Date;
    deletedBy?:   CreatedBy;
    deletedById?: string;
    description:  string;
    groupId:      string;
    handleId:     string;
    id:           string;
    index:        number;
    labels:       { [key: string]: string };
    landscapeId:  string;
    modelId:      string;
    name:         string;
    parentId:     string;
    status:       Status;
    type:         OASQueryParameter;
    updatedAt?:   Date;
    updatedBy?:   CreatedBy;
    updatedById?: string;
    version:      number;
    versionId:    string;
    [property: string]: any;
}

type CreatedBy = "user" | "api-key" | "service";

type OASUnauthorizedResponse = {
    code?:   string;
    errors?: string[];
    message: string;
    [property: string]: any;
}

type OASNotFoundResponse = {
    code?:   string;
    errors?: string[];
    message: string;
    [property: string]: any;
}

type OASUnprocessableEntityResponse = {
    code?:   string;
    errors?: string[];
    message: string;
    [property: string]: any;
}

type OASInternalServerErrorResponse = {
    code?:   string;
    errors?: string[];
    message: string;
    [property: string]: any;
}

type OASResponse = OASOkResponse | OASUnauthorizedResponse | OASNotFoundResponse | OASUnprocessableEntityResponse | OASInternalServerErrorResponse;
type OASSuccessfulResponse = OASOkResponse;
type OASCookieParameters = { [property: string]: any };
type OASRequestBody = undefined;
export type { OASPathParameters as PathParameters, OASQueryParameters as QueryParameters, OASHeaderParameters as HeaderParameters, OASCookieParameters as CookieParameters, OASRequestBody as RequestBody, OASOkResponse as OkResponse, OASUnauthorizedResponse as UnauthorizedResponse, OASNotFoundResponse as NotFoundResponse, OASUnprocessableEntityResponse as UnprocessableEntityResponse, OASInternalServerErrorResponse as InternalServerErrorResponse, OASResponse as Response, OASSuccessfulResponse as SuccessfulResponse };