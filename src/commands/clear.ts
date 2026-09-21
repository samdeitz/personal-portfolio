import type { CommandOutput } from "../components/desktop/apps/terminal/CommandOutput";
import type { CommandStateArg } from "./registry";

export default function clear({ state }: CommandStateArg): CommandOutput {
  state.setHistory([]);
  return { type: "DNS" };
}
