import { open } from "./open";
import { close } from "./close";
import { changeTheme } from "./theme";
import { cd } from "./cd";
import { ls } from "./ls";
import clear from "./clear";
import cat from "./cat";
import { parseCommand } from "./parser";
import {
  failure,
  type CommandDefinition,
  type CommandContext,
  type CommandResult,
} from "./types";

// Execution, help, and completion share this registry so command metadata stays in sync.
export const commands: Record<string, CommandDefinition> = {
  help: {
    usage: "help [command]",
    description: "Show available commands",
    execute: ({ args }) => {
      if (args.length > 1) return failure("Usage: help [command]");
      if (args.length && !Object.hasOwn(commands, args[0]))
        return failure(`help: unknown command ${args[0]}`);
      const entries = args.length
        ? [commands[args[0]]]
        : Object.values(commands);
      return {
        output: {
          type: "list",
          content: entries.map(
            (command) => `${command.usage} — ${command.description}`,
          ),
        },
      };
    },
  },
  pwd: {
    usage: "pwd",
    description: "Print the current directory",
    execute: ({ args, state }) =>
      args.length
        ? failure("Usage: pwd")
        : { output: { type: "message", content: state.cwd } },
  },
  launch: {
    usage: "launch <app-path> [...app-paths]",
    description: "Open a portfolio app",
    execute: open,
    complete: "app",
  },
  exit: { usage: "exit", description: "Close this terminal", execute: close },
  close: { usage: "close", description: "Alias for exit", execute: close },
  theme: {
    usage: "theme [dark|light|toggle]",
    description: "Change the portfolio theme",
    execute: changeTheme,
    complete: "theme",
  },
  chthm: {
    usage: "chthm [dark|light|toggle]",
    description: "Alias for theme",
    execute: changeTheme,
    complete: "theme",
  },
  cd: {
    usage: "cd [directory]",
    description: "Change directory (defaults to home)",
    execute: cd,
    complete: "directory",
  },
  ls: {
    usage: "ls [-a] [directory]",
    description: "List files and apps",
    execute: ls,
    complete: "path",
  },
  clear: {
    usage: "clear",
    description: "Clear the screen, keeping command recall",
    execute: clear,
  },
  cat: {
    usage: "cat <file> [...files]",
    description: "Read text files",
    execute: cat,
    complete: "file",
  },
};

export function executeCommand(
  line: string,
  state: CommandContext,
): CommandResult {
  try {
    const [name, args] = parseCommand(line);
    if (!name) return { output: null };
    // Only registered own properties are commands; inherited names such as toString are not.
    if (!Object.hasOwn(commands, name))
      return failure(`${name}: command not found. Try help.`);
    return commands[name].execute({ args, state });
  } catch (error) {
    // Invalid input should print an error instead of breaking the terminal UI.
    return failure(
      error instanceof Error ? error.message : "Unable to execute command",
    );
  }
}
