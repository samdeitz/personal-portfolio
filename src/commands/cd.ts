import type { CommandOutput } from "../components/desktop/apps/terminal/CommandOutput";
import filesystem from "../filesystem";
import { getNodeByPath } from "../filesystem/traversal";
import type { CommandPayloadArgs } from "./registry";

export const cd = ({ args, state }: CommandPayloadArgs): CommandOutput => {
  if (args.length === 0 || args[0] == "~") {
    state.setPath("/home/sam");
  } else if (args[0] == "..") {
    const parentPath = state.path.slice(0, state.path.lastIndexOf("/"));
    state.setPath(parentPath);
  } else {
    const res = getNodeByPath(filesystem, state.path + "/" + args[0]);
    if (!res)
      return {
        type: "message",
        content: "Error: No directory found",
      };
    state.setPath(state.path + "/" + args[0]);
  }
  return null;
};
