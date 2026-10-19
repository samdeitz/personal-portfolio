import { failure, type CommandPayloadArgs, type CommandResult } from "./types";
export const changeTheme = ({ args, state }: CommandPayloadArgs): CommandResult => {
  if (args.length > 1 || (args[0] && !["dark", "light", "toggle"].includes(args[0])))
    return failure("Usage: theme [dark|light|toggle]");
  const theme = args[0] === "dark" || args[0] === "light" ? args[0] : state.isDark ? "light" : "dark";
  return { output: { type: "message", content: `Theme changed to ${theme}.` }, effects: [{ type: "theme", theme }] };
};
