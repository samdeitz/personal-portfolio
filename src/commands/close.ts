import { failure, type CommandPayloadArgs, type CommandResult } from "./types";
export const close = ({ args }: CommandPayloadArgs): CommandResult => args.length
  ? failure("Usage: exit") : { output: null, effects: [{ type: "close" }] };
