import type { CommandOutput } from "../components/desktop/apps/terminal/CommandOutput";
import type { CommandPayloadArgs } from "./registry";

export const changeTheme = ({
  args,
  state,
}: CommandPayloadArgs): CommandOutput => {
  let output = "";
  state.toggleTheme();
  output = `Theme changed to ${args[0]}.`;
  if (args.length > 1) output.concat(" Cannot change to multiple themes.");
  return {
    type: "message",
    content: output,
  };
};
