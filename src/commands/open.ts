import { getNodeByPath, resolvePath } from "../filesystem/traversal";
import { failure, type CommandPayloadArgs, type CommandResult, type CommandEffect } from "./types";

export const open = ({ args, state }: CommandPayloadArgs): CommandResult => {
  if (!args.length) return failure("Usage: launch <app-path> [...app-paths]");
  const effects: CommandEffect[] = [];
  for (const arg of args) {
    const node = getNodeByPath(state.filesystem, resolvePath(state.cwd, arg));
    if (!node || node.type !== "app") return failure(`launch: ${arg}: no such app`);
    effects.push({ type: "openApp", appID: node.appID });
  }
  return { output: null, effects };
};
