import { icePanelClient } from "../../../icepanel-client/index.ts";
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
    const response = await icePanelClient.listDiagrams({
      pathParameters: { landscapeId, versionId: landscapeVersion },
    });

    log(JSON.stringify(response, undefined, 2));
  };

export const register: RegisterFunction = (commander) => {
  commander
    .command("diagrams")
    .addOption(landscapeId)
    .addOption(landscapeVersion)
    .action(createAction());
};
