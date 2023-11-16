import { InteractiveOption } from "interactive-commander";

export const landscapeId = new InteractiveOption(
  "-l, --landscape-id <id>",
  "Landscape ID",
).env("ICEPANEL_LANDSCAPE_ID");

export const landscapeVersion = new InteractiveOption(
  "--landscape-version <version>",
  "Landscape Version",
)
  .env("ICEPANEL_LANDSCAPE_VERSION")
  .default("latest");
