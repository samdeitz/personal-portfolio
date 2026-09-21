import type { CommandOutput } from "../components/desktop/apps/terminal/CommandOutput";
import filesystem from "../filesystem";
import { getNodeByPath } from "../filesystem/traversal";
import type { CommandPayloadArgs } from "./registry";

export default function cat({
  args,
  state,
}: CommandPayloadArgs): CommandOutput {
  const output: string[] = [];
  const currentNode = getNodeByPath(filesystem, state.path);
  for (const arg of args) {
    const target = currentNode.children.find((child) => child.name === arg);
    if (!target) continue;
    if (target.type === "file") output.unshift(target.content);
  }

  if (!output)
    return {
      type: "errorMessage",
      content: "Unable to show file contents that do not exist",
    };

  return { type: "list", content: output };
}
