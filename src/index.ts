import { register as registerApi } from "./plugins/api/index.ts";
import dotenv from "dotenv";
import { InteractiveCommand, CommanderError } from "interactive-commander";

dotenv.config();

const program = new InteractiveCommand();

program.use(registerApi);

try {
  await program.interactive().parseAsync();
} catch (error) {
  if (error instanceof CommanderError) {
    console.error(error.message);
    process.exit(error.exitCode);
  }

  // Inquirer throws an error when the user force closes the prompt with Ctrl+C
  if (
    error instanceof Error &&
    error.message.startsWith("User force closed the prompt with 0 null")
  ) {
    process.exit(0);
  }

  throw error;
}
