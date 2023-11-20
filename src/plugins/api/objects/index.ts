import { client } from "../../../icepanel-client/index.ts";
import { type QueryParameters } from "../../../icepanel-client/types/model-objects-list.ts";
import { landscapeId, landscapeVersion } from "../common-options.ts";
import {
  InteractiveOption,
  type RegisterFunction,
} from "interactive-commander";

type Filter = {
  [k in keyof NonNullable<QueryParameters["filter"]>]: NonNullable<
    QueryParameters["filter"]
  >[k];
};

const createFilter = (options: Filter): Filter =>
  Object.fromEntries(
    Object.entries(options).filter(([_, value]) => value !== undefined),
  );

export const createAction =
  (log = console.log.bind(console) as typeof console.log) =>
  async ({
    landscapeId,
    landscapeVersion,
    domainId,
    external,
    labels,
    name,
    type,
    parentId,
    status,
  }: {
    landscapeId: string;
    landscapeVersion: string;
  } & Filter & { labels: string }) => {
    const filter: QueryParameters["filter"] = createFilter({
      domainId,
      external,
      labels,
      name,
      type,
      parentId,
      status,
    });

    const response = await client.modelObjectsList({
      pathParameters: { landscapeId, versionId: landscapeVersion },
      queryParameters: {
        filter,
      },
    });

    const { modelObjects } = response;

    log(JSON.stringify(modelObjects, undefined, 2));
  };

export const register: RegisterFunction = (commander) => {
  commander
    .command("objects")
    .addOption(landscapeId)
    .addOption(landscapeVersion)
    .option("-d, --domain-id [id]", "Domain ID")
    .option("-e, --external", "External")
    .addOption(
      new InteractiveOption("-t, --type [type]", "Type").choices([
        "actor",
        "app",
        "area",
        "component",
        "root",
        "store",
        "system",
      ] satisfies Filter["type"]),
    )
    .option("-p, --parent-id [id]", "Parent ID")
    .addOption(
      new InteractiveOption("-s, --status [status]", "Status").choices([
        "deprecated",
        "future",
        "live",
        "removed",
      ] satisfies Filter["status"]),
    )
    .action(createAction());
};
