import fs from "node:fs";
import yaml from "yaml";

const OAS_URL = "https://api.icepanel.io";

const response = await fetch(OAS_URL, {
  redirect: "follow",
});

const jsonApiDocument = await response.json();
const yamlApiDocument = yaml.stringify(jsonApiDocument);

fs.writeFileSync(new URL("../api.oas.yml", import.meta.url), yamlApiDocument, {
  encoding: "utf8",
});
