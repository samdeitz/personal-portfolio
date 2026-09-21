import type { CommandOutput } from "../components/desktop/apps/terminal/CommandOutput";
import { resolveTarget } from "../filesystem/traversal";
import type { CommandPayloadArgs } from "./registry";

export const open = ({ args, state }: CommandPayloadArgs): CommandOutput => {
  if (args.length === 0) return null;

  const res = [];
  for (const arg of args) {
    const id = resolveTarget(state.path, arg);
    if (!id) {
      res.unshift(`launch: Unable to launch ${arg}`);
      continue;
    }
    state.dispatch({
      type: "CREATE_WINDOW",
      payload: {
        windowID: id,
      },
    });
    res.unshift(`launch: Launched ${arg}.`);
  }
  return {
    type: "list",
    content: res,
  };
};
