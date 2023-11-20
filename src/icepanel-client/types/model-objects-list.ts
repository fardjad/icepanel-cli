// This file is generated from /api.oas.yml
// Changes made to this file will be lost upon regeneration
// Typos in this file are potentially related to this issue: https://github.com/glideapps/quicktype/issues/1678

export const operationMethod = "GET";
export const pathUrlTemplate =
  "/landscapes/{landscapeId}/versions/{versionId}/model/objects";
export const queryUrlTemplate = "{?filter}";

type OASPathParameters = {
  landscapeId: string;
  versionId: string;
  [property: string]: any;
};

type OASQueryParameters = {
  filter?: Ter;
  [property: string]: any;
};

type Ter = {
  domainId?: string;
  external?: boolean;
  labels?: { [key: string]: string };
  name?: string;
  parentId?: string;
  status?: StatusElement[] | StatusElement;
  type?: TypeElement[] | TypeElement;
  [property: string]: any;
};

type StatusElement = "live" | "future" | "deprecated" | "removed";

type TypeElement =
  | "root"
  | "actor"
  | "system"
  | "app"
  | "store"
  | "component"
  | "area";

type OASHeaderParameters = {
  Authorization: string;
  [property: string]: any;
};

type OASOkResponse = {
  modelObjects: ModelObjectElement[];
  [property: string]: any;
};

type ModelObjectElement = {
  caption?: string;
  childDiagramIds: string[];
  childIds: string[];
  commit: number;
  createdAt: Date;
  createdBy: CreatedBy;
  createdById: string;
  deletedAt?: Date;
  deletedBy?: CreatedBy;
  deletedById?: string;
  description?: string;
  diagrams: { [key: string]: DiagramValue };
  domainId: string;
  external: boolean;
  flows: { [key: string]: FlowValue };
  handleId: string;
  icon: Icon;
  id: string;
  labels: { [key: string]: string };
  landscapeId: string;
  links: { [key: string]: LinkValue };
  name: string;
  parentId: string;
  status: StatusElement;
  tagIds: string[];
  teamIds: string[];
  technologies: { [key: string]: TechnologyValue };
  type: TypeElement;
  updatedAt?: Date;
  updatedBy?: CreatedBy;
  updatedById?: string;
  version: number;
  versionId: string;
  [property: string]: any;
};

type CreatedBy = "user" | "api-key" | "service";

type DiagramValue = {
  id: string;
  objectId: string;
  [property: string]: any;
};

type FlowValue = {
  id: string;
  stepId: string;
  [property: string]: any;
};

type Icon = {
  catalogTechnologyId: string;
  name: string;
  url?: string;
  urlDark?: string;
  urlLight?: string;
  [property: string]: any;
};

type LinkValue = {
  customName?: string;
  id: string;
  index: number;
  name: string;
  status?: StatusEnum;
  technologies?: TechnologyElement[];
  url: string;
  accountName?: string;
  projectId?: number | string;
  repositoryId?: number | string;
  type: LinkType;
  branchName?: string;
  path?: string;
  workspaceId?: string;
  serverUrl?: string;
  ownerId?: number;
  groupId?: number;
  [property: string]: any;
};

type StatusEnum = "valid" | "invalid";

type TechnologyElement = {
  color?: string;
  count: number;
  name: string;
  size: number;
  type: PurpleType;
  [property: string]: any;
};

type PurpleType = "programming" | "data" | "markup" | "prose";

type LinkType =
  | "azure-devops-repo"
  | "azure-devops-branch"
  | "azure-devops-folder"
  | "azure-devops-file"
  | "bitbucket-repo"
  | "bitbucket-branch"
  | "bitbucket-folder"
  | "bitbucket-file"
  | "bitbucket-server-repo"
  | "bitbucket-server-branch"
  | "bitbucket-server-folder"
  | "bitbucket-server-file"
  | "github-repo"
  | "github-branch"
  | "github-folder"
  | "github-file"
  | "gitlab-repo"
  | "gitlab-branch"
  | "gitlab-folder"
  | "gitlab-file"
  | "url";

type TechnologyValue = {
  color: Color;
  iconUrl?: string;
  iconUrlDark?: string;
  iconUrlLight?: string;
  id: string;
  index: number;
  name: string;
  nameShort?: string;
  provider: Provider;
  type: FluffyType;
  [property: string]: any;
};

type Color =
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "beaver"
  | "dark-blue"
  | "purple"
  | "pink"
  | "white"
  | "grey"
  | "black";

type Provider =
  | "aws"
  | "azure"
  | "gcp"
  | "microsoft"
  | "salesforce"
  | "atlassian"
  | "apache"
  | "supabase";

type FluffyType =
  | "provider"
  | "runtime"
  | "kubernetes"
  | "language"
  | "generic"
  | "operating-system"
  | "framework"
  | "database"
  | "service"
  | "library"
  | "tool";

type OASUnauthorizedResponse = {
  code?: string;
  errors?: string[];
  message: string;
  [property: string]: any;
};

type OASNotFoundResponse = {
  code?: string;
  errors?: string[];
  message: string;
  [property: string]: any;
};

type OASUnprocessableEntityResponse = {
  code?: string;
  errors?: string[];
  message: string;
  [property: string]: any;
};

type OASInternalServerErrorResponse = {
  code?: string;
  errors?: string[];
  message: string;
  [property: string]: any;
};

type OASResponse =
  | OASOkResponse
  | OASUnauthorizedResponse
  | OASNotFoundResponse
  | OASUnprocessableEntityResponse
  | OASInternalServerErrorResponse;
type OASSuccessfulResponse = OASOkResponse;
type OASCookieParameters = { [property: string]: any };
type OASRequestBody = undefined;
export type {
  OASPathParameters as PathParameters,
  OASQueryParameters as QueryParameters,
  OASHeaderParameters as HeaderParameters,
  OASCookieParameters as CookieParameters,
  OASRequestBody as RequestBody,
  OASOkResponse as OkResponse,
  OASUnauthorizedResponse as UnauthorizedResponse,
  OASNotFoundResponse as NotFoundResponse,
  OASUnprocessableEntityResponse as UnprocessableEntityResponse,
  OASInternalServerErrorResponse as InternalServerErrorResponse,
  OASResponse as Response,
  OASSuccessfulResponse as SuccessfulResponse,
};
