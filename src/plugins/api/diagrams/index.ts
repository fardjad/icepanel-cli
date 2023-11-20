import { client } from "../../../icepanel-client/index.ts";
import { landscapeId, landscapeVersion } from "../common-options.ts";
import { type RegisterFunction } from "interactive-commander";

export const createAction =
  (log = console.log.bind(console) as typeof console.log) =>
  async ({
    landscapeId,
    landscapeVersion,
  }: {
    landscapeId: string;
    landscapeVersion: string;
  }) => {
    const response = await client.diagramsList({
      pathParameters: { landscapeId, versionId: landscapeVersion },
    });

    const { diagrams } = response;

    log(JSON.stringify(diagrams, undefined, 2));
  };

export const register: RegisterFunction = (commander) => {
  commander
    .command("diagrams")
    .addOption(landscapeId)
    .addOption(landscapeVersion)
    .action(createAction());
};
