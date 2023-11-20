import { client } from "../../icepanel-client/index.ts";
import { register as diagramsPlugin } from "./diagrams/index.ts";
import { register as objectsPlugin } from "./objects/index.ts";
import * as inquirer from "@inquirer/prompts";
import {
  InteractiveOption,
  Option,
  type RegisterFunction,
} from "interactive-commander";
import qs from "qs";

export const register: RegisterFunction = (commander) => {
  commander
    .command("api", { isDefault: true })
    .use(diagramsPlugin)
    .use(objectsPlugin)
    .addOption(
      new Option("-u, --base-url <url>")
        .env("ICEPANEL_BASE_URL")
        .default("https://api.icepanel.io/v1"),
    )
    .addOption(
      new InteractiveOption("-k, --api-key <key>")
        .env("ICEPANEL_API_KEY")
        .prompt(async (currentValue) => {
          if (currentValue) {
            return currentValue;
          }

          return inquirer.password(
            { message: "api-key" },
            { clearPromptOnDone: true },
          );
        }),
    )
    .hook("preSubcommand", (thisCommand) => {
      client.baseUrl = thisCommand.getOptionValue("baseUrl") as string;
      client.apiKey = thisCommand.getOptionValue("apiKey") as string;
      client.customQueryStringParserFunction = (queryParameters) =>
        qs.stringify(queryParameters, { encode: false, arrayFormat: "comma" });

      client.fetchFunction = async (input, init) => {
        console.error(`${init?.method ?? "GET"}: ${String(input)}`);

        return fetch(input, init);
      };
    });
};
