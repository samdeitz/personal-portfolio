import { getNodeByPath, resolvePath } from "../filesystem/traversal";
import { failure, type CommandPayloadArgs, type CommandResult } from "./types";

export const ls = ({ args, state }: CommandPayloadArgs): CommandResult => {
  let showHidden = false;
  const paths: string[] = [];
  let options = true;
  for (const arg of args) {
    if (options && arg === "--") { options = false; continue; }
    if (options && arg.startsWith("-")) {
      if (!/^-a+$/.test(arg)) return failure(`ls: unsupported option ${arg}`);
      showHidden = true;
    } else paths.push(arg);
  }
  if (paths.length > 1) return failure("Usage: ls [-a] [directory]");
  const path = resolvePath(state.cwd, paths[0] ?? ".");
  const node = getNodeByPath(state.filesystem, path);
  if (!node) return failure(`ls: ${path}: no such path`);
  if (node.type !== "directory") return { output: { type: "list", content: [node.name] } };
  return { output: { type: "list", content: node.children
    .filter((child) => showHidden || !child.name.startsWith("."))
    .map((child) => child.name + (child.type === "directory" ? "/" : "")) } };
};
