import { getNodeByPath, HOME_PATH, resolvePath } from "../filesystem/traversal";
import { failure, type CommandPayloadArgs, type CommandResult } from "./types";

export const cd = ({ args, state }: CommandPayloadArgs): CommandResult => {
  if (args.length > 1) return failure("cd: expected one directory");
  const path = resolvePath(state.cwd, args[0] ?? HOME_PATH);
  const node = getNodeByPath(state.filesystem, path);
  if (!node) return failure(`cd: ${path}: no such directory`);
  if (node.type !== "directory") return failure(`cd: ${path}: not a directory`);
  return { output: null, effects: [{ type: "changeDirectory", path }] };
};
