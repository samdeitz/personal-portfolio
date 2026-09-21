import type { CommandOutput } from "../components/desktop/apps/terminal/CommandOutput";
import filesystem from "../filesystem";
import { getNodeByPath } from "../filesystem/traversal";
import { getDashOptions } from "../filesystem/utils";
import type { CommandPayloadArgs } from "./registry";

export const ls = ({ args, state }: CommandPayloadArgs): CommandOutput => {
  const currTree = getNodeByPath(filesystem, state.path);
  if (currTree.type != "directory")
    return {
      type: "message",
      content: "Error: im not sure how you got here...",
    };

  let res = [];
  for (const file of currTree.children) {
    const options = getDashOptions(args);

    if (!options.includes("a")) if (file.name.startsWith(".")) continue;
    res.unshift(file.name);
  }
  return {
    type: "list",
    content: res,
  };
};
