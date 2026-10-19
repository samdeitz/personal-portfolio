import { getNodeByPath, resolvePath } from "../filesystem/traversal";
import { failure, type CommandPayloadArgs, type CommandResult } from "./types";

export default function cat({ args, state }: CommandPayloadArgs): CommandResult {
  if (!args.length) return failure("Usage: cat <file> [...files]");
  const output: string[] = [];
  for (const arg of args) {
    const node = getNodeByPath(state.filesystem, resolvePath(state.cwd, arg));
    if (!node) return failure(`cat: ${arg}: no such file`);
    if (node.type !== "file") return failure(`cat: ${arg}: not a text file`);
    output.push(node.content);
  }
  return { output: { type: "list", content: output } };
}
