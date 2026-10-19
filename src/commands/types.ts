import type { FileNode } from "../filesystem/types";

export type CommandOutput =
  | { type: "message" | "errorMessage"; content: string }
  | { type: "list"; content: string[] };

// Handlers describe requested changes; Terminal applies them through app/session APIs.
// This keeps command logic independent of React setters and window focus.
export type CommandEffect =
  | { type: "changeDirectory"; path: string }
  | { type: "clear" }
  | { type: "openApp"; appID: string }
  | { type: "close" }
  | { type: "theme"; theme: "dark" | "light" };

export interface CommandResult {
  // A successful command may have effects without printing anything (for example cd).
  output: CommandOutput | null;
  effects?: CommandEffect[];
}
export interface CommandContext {
  cwd: string;
  filesystem: FileNode;
  isDark: boolean;
}
export interface CommandPayloadArgs {
  args: string[];
  state: CommandContext;
}
export interface CommandDefinition {
  usage: string;
  description: string;
  execute: (payload: CommandPayloadArgs) => CommandResult;
  complete?: "directory" | "file" | "app" | "path" | "theme";
}
export const failure = (content: string): CommandResult => ({
  output: { type: "errorMessage", content },
});
