import { failure, type CommandPayloadArgs, type CommandResult } from "./types";
export default function clear({ args }: CommandPayloadArgs): CommandResult {
  return args.length ? failure("Usage: clear") : { output: null, effects: [{ type: "clear" }] };
}
