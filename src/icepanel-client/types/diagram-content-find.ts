// This file is generated from /api.oas.yml
// Changes made to this file will be lost upon regeneration
// Typos in this file are potentially related to this issue: https://github.com/glideapps/quicktype/issues/1678

export const operationMethod = "GET";
export const pathUrlTemplate = "/landscapes/{landscapeId}/versions/{versionId}/diagrams/{diagramId}/content";
export const queryUrlTemplate = "{?updateViewedAt}";

type OASPathParameters = {
    diagramId:   string;
    landscapeId: string;
    versionId:   string;
    [property: string]: any;
}

type OASQueryParameters = {
    updateViewedAt?: boolean;
    [property: string]: any;
}

type OASHeaderParameters = {
    Authorization: string;
    [property: string]: any;
}

type OASOkResponse = {
    diagramContent: DiagramContent;
    [property: string]: any;
}

type DiagramContent = {
    commit:        number;
    connections:   { [key: string]: ConnectionValue };
    createdAt:     Date;
    createdBy:     CreatedBy;
    createdById:   string;
    deletedAt?:    Date;
    deletedBy?:    CreatedBy;
    deletedById?:  string;
    groupId:       string;
    handleId:      string;
    id:            string;
    landscapeId:   string;
    modelId:       string;
    name:          string;
    objects:       { [key: string]: ObjectValue };
    status:        DiagramContentStatus;
    tasksProposed: TasksProposedElement[];
    type:          DiagramContentType;
    updatedAt?:    Date;
    updatedBy?:    CreatedBy;
    updatedById?:  string;
    version:       number;
    versionId:     string;
    viewedAt?:     Date;
    viewedBy?:     CreatedBy;
    viewedById?:   string;
    [property: string]: any;
}

type ConnectionValue = {
    id:              string;
    labelPosition:   number;
    lineShape:       LineShape;
    modelId:         string;
    originConnector: OriginConnector;
    originId:        string;
    points:          ConnectionPoint[];
    targetConnector: OriginConnector;
    targetId:        string;
    [property: string]: any;
}

type LineShape = "curved" | "straight" | "square";

type OriginConnector = "top-left" | "top-center" | "top-right" | "right-top" | "right-middle" | "right-bottom" | "bottom-right" | "bottom-center" | "bottom-left" | "left-bottom" | "left-middle" | "left-top";

type ConnectionPoint = {
    x: number;
    y: number;
    [property: string]: any;
}

type CreatedBy = "user" | "api-key" | "service";

type ObjectValue = {
    height:  number;
    id:      string;
    modelId: string;
    type:    ObjectType;
    width:   number;
    x:       number;
    y:       number;
    [property: string]: any;
}

type ObjectType = "actor" | "app" | "area" | "component" | "container" | "store" | "system";

type DiagramContentStatus = "current" | "draft";

type TasksProposedElement = {
    proposedAt:   Date;
    proposedBy:   CreatedBy;
    proposedById: string;
    task:         Task;
    [property: string]: any;
}

type TasksProposedObject = {
    $append?:  Task[];
    $replace?: Task[];
    [property: string]: any;
}

type Props = {
    body?:                Body;
    commit?:              number;
    handleId?:            string;
    mentionedUserIds?:    string[];
    target?:              Target;
    content?:             string;
    description?:         string;
    groupId?:             string;
    index?:               number;
    labels?:              { [key: string]: string };
    modelId?:             string;
    name?:                string;
    parentId?:            string;
    status?:              PropsStatus;
    type?:                PropsType;
    connections?:         Connections;
    objects?:             Objects;
    tasksProposed?:       Task[] | TasksProposedObject;
    subscriptionUserIds?: string[];
    caption?:             string;
    domainId?:            string;
    external?:            boolean;
    icon?:                IconEnum | IconObject;
    links?:               { [key: string]: LinkValue };
    tagIds?:              string[];
    teamIds?:             string[];
    technologies?:        { [key: string]: TechnologyValue };
    direction?:           Direction;
    originId?:            string;
    targetId?:            string;
    diagramId?:           string;
    showConnectionNames?: boolean;
    steps?:               Steps;
    color?:               Color;
    [property: string]: any;
}

type Task = {
    tasks?: Task[];
    type:   TaskType;
    route?: Route;
    id?:    string;
    props?: Props;
    [property: string]: any;
}

type Body = {
    content:             string;
    showContentPreview?: boolean;
    status:              BodyStatus;
    type:                BodyType;
    [property: string]: any;
}

type BodyStatus = "open" | "resolved" | "active" | "dismissed" | "create";

type BodyType = "question" | "inaccurate" | "idea" | "new-question" | "new-inaccurate" | "new-idea";

type Color = "blue" | "green" | "yellow" | "orange" | "red" | "beaver" | "dark-blue" | "purple" | "pink" | "white" | "grey" | "black";

type Connections = {
    $add?:     ConnectionsAdd;
    $remove?:  string[] | ConnectionValue;
    $replace?: ConnectionsReplace;
    $update?:  ConnectionsUpdate;
    [property: string]: any;
}

type ConnectionsAdd = {
    id?:              ConnectionValue | string;
    labelPosition?:   number | ConnectionValue;
    lineShape?:       LineShape | ConnectionValue;
    modelId?:         ConnectionValue | string;
    originConnector?: OriginConnector | ConnectionValue;
    originId?:        ConnectionValue | string;
    points?:          ConnectionPoint[] | ConnectionValue;
    targetConnector?: OriginConnector | ConnectionValue;
    targetId?:        ConnectionValue | string;
    [property: string]: any;
}

type ConnectionsReplace = {
    id?:              ConnectionValue | string;
    labelPosition?:   number | ConnectionValue;
    lineShape?:       LineShape | ConnectionValue;
    modelId?:         ConnectionValue | string;
    originConnector?: OriginConnector | ConnectionValue;
    originId?:        ConnectionValue | string;
    points?:          ConnectionPoint[] | ConnectionValue;
    targetConnector?: OriginConnector | ConnectionValue;
    targetId?:        ConnectionValue | string;
    [property: string]: any;
}

type ConnectionsUpdate = {
    id?:              PurpleOASOkRespons | string;
    labelPosition?:   number | PurpleOASOkRespons;
    lineShape?:       LineShape | PurpleOASOkRespons;
    modelId?:         PurpleOASOkRespons | string;
    originConnector?: OriginConnector | PurpleOASOkRespons;
    originId?:        PurpleOASOkRespons | string;
    points?:          ConnectionPoint[] | PurpleOASOkRespons;
    targetConnector?: OriginConnector | PurpleOASOkRespons;
    targetId?:        PurpleOASOkRespons | string;
    [property: string]: any;
}

type PurpleOASOkRespons = {
    id?:              string;
    labelPosition?:   number;
    lineShape?:       LineShape;
    modelId?:         string;
    originConnector?: OriginConnector;
    originId?:        string;
    points?:          PurplePoint[];
    targetConnector?: OriginConnector;
    targetId?:        string;
    [property: string]: any;
}

type PurplePoint = {
    x: number;
    y: number;
    [property: string]: any;
}

type Direction = "outgoing" | "bidirectional";

type IconEnum = "bug" | "calendar-check" | "calendar-times" | "cloud" | "cog" | "database" | "exclamation-triangle" | "file" | "globe" | "laptop-code" | "lightbulb" | "lock" | "microchip" | "minus" | "mobile" | "network-wired" | "plus" | "poo" | "robot" | "rocket" | "sack-dollar" | "server" | "sledding" | "snowman" | "star" | "times" | "toolbox" | "trash" | "users" | "wifi";

type IconObject = {
    catalogTechnologyId: string;
    name:                string;
    url?:                string;
    urlDark?:            string;
    urlLight?:           string;
    [property: string]: any;
}

type LinkValue = {
    customName?:   string;
    id?:           string;
    index?:        number;
    name?:         string;
    status?:       LinkStatus;
    technologies?: TechnologyElement[];
    url?:          string;
    accountName?:  string;
    projectId?:    number | string;
    repositoryId?: number | string;
    type:          LinkType;
    branchName?:   string;
    path?:         string;
    workspaceId?:  string;
    serverUrl?:    string;
    ownerId?:      number;
    groupId?:      number;
    [property: string]: any;
}

type LinkStatus = "valid" | "invalid";

type TechnologyElement = {
    color?: string;
    count:  number;
    name:   string;
    size:   number;
    type:   PurpleType;
    [property: string]: any;
}

type PurpleType = "programming" | "data" | "markup" | "prose";

type LinkType = "azure-devops-repo" | "azure-devops-branch" | "azure-devops-folder" | "azure-devops-file" | "bitbucket-repo" | "bitbucket-branch" | "bitbucket-folder" | "bitbucket-file" | "bitbucket-server-repo" | "bitbucket-server-branch" | "bitbucket-server-folder" | "bitbucket-server-file" | "github-repo" | "github-branch" | "github-folder" | "github-file" | "gitlab-repo" | "gitlab-branch" | "gitlab-folder" | "gitlab-file" | "url";

type Objects = {
    $add?:     ObjectsAdd;
    $remove?:  string[] | ObjectValue;
    $replace?: ObjectsReplace;
    $update?:  ObjectsUpdate;
    [property: string]: any;
}

type ObjectsAdd = {
    height?:  number | ObjectValue;
    id?:      ObjectValue | string;
    modelId?: ObjectValue | string;
    type?:    ObjectType | ObjectValue;
    width?:   number | ObjectValue;
    x?:       number | ObjectValue;
    y?:       number | ObjectValue;
    [property: string]: any;
}

type ObjectsReplace = {
    height?:  number | ObjectValue;
    id?:      ObjectValue | string;
    modelId?: ObjectValue | string;
    type?:    ObjectType | ObjectValue;
    width?:   number | ObjectValue;
    x?:       number | ObjectValue;
    y?:       number | ObjectValue;
    [property: string]: any;
}

type ObjectsUpdate = {
    height?:  number | FluffyOASOkRespons;
    id?:      FluffyOASOkRespons | string;
    modelId?: FluffyOASOkRespons | string;
    type?:    ObjectType | FluffyOASOkRespons;
    width?:   number | FluffyOASOkRespons;
    x?:       number | FluffyOASOkRespons;
    y?:       number | FluffyOASOkRespons;
    [property: string]: any;
}

type FluffyOASOkRespons = {
    height?:  number;
    id?:      string;
    modelId?: string;
    type?:    ObjectType;
    width?:   number;
    x?:       number;
    y?:       number;
    [property: string]: any;
}

type PropsStatus = "current" | "draft" | "live" | "future" | "deprecated" | "removed";

type Steps = {
    $add?:     StepsAdd;
    $remove?:  string[] | FriskyOASOkRespons;
    $replace?: StepsReplace;
    $update?:  StepsUpdate;
    [property: string]: any;
}

type StepsAdd = {
    description?:       StickyOASOkRespons | string;
    id?:                StickyOASOkRespons | string;
    index?:             number | HilariousOASOkRespons;
    originId?:          StickyOASOkRespons | string;
    pathId?:            StickyOASOkRespons | string;
    pathIndex?:         number | HilariousOASOkRespons;
    targetId?:          StickyOASOkRespons | string;
    type?:              ConnectionIdsType | MagentaOASOkRespons;
    viaId?:             StickyOASOkRespons | string;
    connectionIds?:     string[] | TentacledOASOkRespons;
    diagramId?:         StickyOASOkRespons | string;
    drawer?:            DrawerEnum | IndigoOASOkRespons;
    drawerObject?:      DrawerEnum | IndecentOASOkRespons;
    flowId?:            StickyOASOkRespons | string;
    flowPathIds?:       string[] | TentacledOASOkRespons;
    flowStepId?:        StickyOASOkRespons | string;
    modelId?:           StickyOASOkRespons | string;
    objectIds?:         string[] | TentacledOASOkRespons;
    objectTab?:         ObjectTabEnum | AmbitiousOASOkRespons;
    overlayGroupId?:    StickyOASOkRespons | string;
    overlayIdsFocused?: string[] | TentacledOASOkRespons;
    overlayIdsHidden?:  string[] | TentacledOASOkRespons;
    overlayIdsPinned?:  string[] | TentacledOASOkRespons;
    overlayTab?:        OverlayTabEnum | CunningOASOkRespons;
    x1?:                number | HilariousOASOkRespons;
    x2?:                number | HilariousOASOkRespons;
    y1?:                number | HilariousOASOkRespons;
    y2?:                number | HilariousOASOkRespons;
    [property: string]: any;
}

type TentacledOASOkRespons = {
    description?:       string;
    id:                 string;
    index:              number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type:               ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type DrawerEnum = "expanded" | "collapsed";

type ObjectTabEnum = "details" | "connections";

type OverlayTabEnum = "tags" | "technology" | "status";

type ConnectionIdsType = "alternate-path" | "outgoing" | "parallel-path" | "reply" | "self-action" | "diagram" | "flow";

type StickyOASOkRespons = {
    description?:       string;
    id:                 string;
    index:              number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type:               ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type IndigoOASOkRespons = {
    description?:       string;
    id:                 string;
    index:              number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type:               ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type IndecentOASOkRespons = {
    description?:       string;
    id:                 string;
    index:              number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type:               ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type HilariousOASOkRespons = {
    description?:       string;
    id:                 string;
    index:              number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type:               ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type AmbitiousOASOkRespons = {
    description?:       string;
    id:                 string;
    index:              number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type:               ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type CunningOASOkRespons = {
    description?:       string;
    id:                 string;
    index:              number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type:               ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type MagentaOASOkRespons = {
    description?:       string;
    id:                 string;
    index:              number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type:               ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type FriskyOASOkRespons = {
    description?:       string;
    id:                 string;
    index:              number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type:               ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type StepsReplace = {
    description?:       StickyOASOkRespons | string;
    id?:                StickyOASOkRespons | string;
    index?:             number | HilariousOASOkRespons;
    originId?:          StickyOASOkRespons | string;
    pathId?:            StickyOASOkRespons | string;
    pathIndex?:         number | HilariousOASOkRespons;
    targetId?:          StickyOASOkRespons | string;
    type?:              ConnectionIdsType | MagentaOASOkRespons;
    viaId?:             StickyOASOkRespons | string;
    connectionIds?:     string[] | TentacledOASOkRespons;
    diagramId?:         StickyOASOkRespons | string;
    drawer?:            DrawerEnum | IndigoOASOkRespons;
    drawerObject?:      DrawerEnum | IndecentOASOkRespons;
    flowId?:            StickyOASOkRespons | string;
    flowPathIds?:       string[] | TentacledOASOkRespons;
    flowStepId?:        StickyOASOkRespons | string;
    modelId?:           StickyOASOkRespons | string;
    objectIds?:         string[] | TentacledOASOkRespons;
    objectTab?:         ObjectTabEnum | AmbitiousOASOkRespons;
    overlayGroupId?:    StickyOASOkRespons | string;
    overlayIdsFocused?: string[] | TentacledOASOkRespons;
    overlayIdsHidden?:  string[] | TentacledOASOkRespons;
    overlayIdsPinned?:  string[] | TentacledOASOkRespons;
    overlayTab?:        OverlayTabEnum | CunningOASOkRespons;
    x1?:                number | HilariousOASOkRespons;
    x2?:                number | HilariousOASOkRespons;
    y1?:                number | HilariousOASOkRespons;
    y2?:                number | HilariousOASOkRespons;
    [property: string]: any;
}

type StepsUpdate = {
    description?:       BraggadociousOASOkRespons | string;
    id?:                BraggadociousOASOkRespons | string;
    index?:             number | OASOkRespons3;
    originId?:          BraggadociousOASOkRespons | string;
    pathId?:            BraggadociousOASOkRespons | string;
    pathIndex?:         number | OASOkRespons3;
    targetId?:          BraggadociousOASOkRespons | string;
    type?:              ConnectionIdsType | OASOkRespons6;
    viaId?:             BraggadociousOASOkRespons | string;
    connectionIds?:     string[] | MischievousOASOkRespons;
    diagramId?:         BraggadociousOASOkRespons | string;
    drawer?:            DrawerEnum | OASOkRespons1;
    drawerObject?:      DrawerEnum | OASOkRespons2;
    flowId?:            BraggadociousOASOkRespons | string;
    flowPathIds?:       string[] | MischievousOASOkRespons;
    flowStepId?:        BraggadociousOASOkRespons | string;
    modelId?:           BraggadociousOASOkRespons | string;
    objectIds?:         string[] | MischievousOASOkRespons;
    objectTab?:         ObjectTabEnum | OASOkRespons4;
    overlayGroupId?:    BraggadociousOASOkRespons | string;
    overlayIdsFocused?: string[] | MischievousOASOkRespons;
    overlayIdsHidden?:  string[] | MischievousOASOkRespons;
    overlayIdsPinned?:  string[] | MischievousOASOkRespons;
    overlayTab?:        OverlayTabEnum | OASOkRespons5;
    x1?:                number | OASOkRespons3;
    x2?:                number | OASOkRespons3;
    y1?:                number | OASOkRespons3;
    y2?:                number | OASOkRespons3;
    [property: string]: any;
}

type MischievousOASOkRespons = {
    description?:       string;
    id?:                string;
    index?:             number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type?:              ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type BraggadociousOASOkRespons = {
    description?:       string;
    id?:                string;
    index?:             number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type?:              ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type OASOkRespons1 = {
    description?:       string;
    id?:                string;
    index?:             number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type?:              ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type OASOkRespons2 = {
    description?:       string;
    id?:                string;
    index?:             number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type?:              ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type OASOkRespons3 = {
    description?:       string;
    id?:                string;
    index?:             number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type?:              ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type OASOkRespons4 = {
    description?:       string;
    id?:                string;
    index?:             number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type?:              ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type OASOkRespons5 = {
    description?:       string;
    id?:                string;
    index?:             number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type?:              ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type OASOkRespons6 = {
    description?:       string;
    id?:                string;
    index?:             number;
    originId?:          string;
    pathId?:            string;
    pathIndex?:         number;
    targetId?:          string;
    type?:              ConnectionIdsType;
    viaId?:             string;
    connectionIds?:     string[];
    diagramId?:         string;
    drawer?:            DrawerEnum;
    drawerObject?:      DrawerEnum;
    flowId?:            string;
    flowPathIds?:       string[];
    flowStepId?:        string;
    modelId?:           string;
    objectIds?:         string[];
    objectTab?:         ObjectTabEnum;
    overlayGroupId?:    string;
    overlayIdsFocused?: string[];
    overlayIdsHidden?:  string[];
    overlayIdsPinned?:  string[];
    overlayTab?:        OverlayTabEnum;
    x1?:                number;
    x2?:                number;
    y1?:                number;
    y2?:                number;
    [property: string]: any;
}

type Target = {
    id:   string;
    type: TargetType;
    x:    number;
    y:    number;
    [property: string]: any;
}

type TargetType = "diagram";

type TechnologyValue = {
    color:         Color;
    iconUrl?:      string;
    iconUrlDark?:  string;
    iconUrlLight?: string;
    id:            string;
    index:         number;
    name:          string;
    nameShort?:    string;
    provider:      Provider;
    type:          FluffyType;
    [property: string]: any;
}

type Provider = "aws" | "azure" | "gcp" | "microsoft" | "salesforce" | "atlassian" | "apache" | "supabase";

type FluffyType = "provider" | "runtime" | "kubernetes" | "language" | "generic" | "operating-system" | "framework" | "database" | "service" | "library" | "tool";

type PropsType = "context-diagram" | "app-diagram" | "component-diagram" | "root" | "actor" | "system" | "app" | "store" | "component" | "area";

type Route = {
    name?:   { [key: string]: any };
    params?: { [key: string]: string };
    query?:  { [key: string]: string[] | string };
    [property: string]: any;
}

type TaskType = "batch" | "navigation" | "comment-create" | "comment-update" | "comment-delete" | "comment-reply-create" | "comment-reply-update" | "comment-reply-delete" | "diagram-create" | "diagram-update" | "diagram-delete" | "diagram-content-update" | "diagram-group-create" | "diagram-group-update" | "diagram-group-delete" | "domain-create" | "domain-update" | "domain-delete" | "model-object-create" | "model-object-update" | "model-object-delete" | "model-connection-create" | "model-connection-update" | "model-connection-delete" | "flow-create" | "flow-update" | "flow-delete" | "tag-create" | "tag-update" | "tag-delete" | "tag-group-create" | "tag-group-update" | "tag-group-delete" | "tour-create" | "tour-update" | "tour-delete";

type DiagramContentType = "context-diagram" | "app-diagram" | "component-diagram";

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
type OASCookieParameters = { [property: string]: any };
type OASRequestBody = undefined;
export type { OASPathParameters as PathParameters, OASQueryParameters as QueryParameters, OASHeaderParameters as HeaderParameters, OASCookieParameters as CookieParameters, OASRequestBody as RequestBody, OASOkResponse as OkResponse, OASUnauthorizedResponse as UnauthorizedResponse, OASNotFoundResponse as NotFoundResponse, OASUnprocessableEntityResponse as UnprocessableEntityResponse, OASInternalServerErrorResponse as InternalServerErrorResponse, OASResponse as Response };