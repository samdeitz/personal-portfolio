import type { CommandContext } from "./types";
import { commands } from "./registry";
import { quoteArgument, tokenize } from "./parser";
import { getNodeByPath, resolvePath } from "../filesystem/traversal";

export function completeCommand(
  line: string,
  caret: number,
  state: CommandContext,
): { input: string; caret: number; suggestions: string[] } {
  // Parse only up to the caret to find the prefix being completed. Partial mode
  // allows Tab while the user is still typing a quoted argument.
  const before = line.slice(0, caret);
  const tokens = tokenize(before, true);
  const last = tokens.at(-1);
  // Whitespace after a finished token starts a new, empty argument.
  const active = last?.end === caret ? last : undefined;
  const prefix = active?.value ?? "";
  const start = active?.start ?? caret;
  const argumentIndex = active ? tokens.length - 1 : tokens.length;
  let candidates: string[] = [];
  if (
    argumentIndex === 0 ||
    (tokens[0]?.value === "help" && argumentIndex === 1)
  ) {
    candidates = Object.keys(commands).filter((name) =>
      name.startsWith(prefix),
    );
  } else {
    const command = tokens[0]?.value ?? "";
    const kind = Object.hasOwn(commands, command)
      ? commands[command].complete
      : undefined;
    if (kind === "theme")
      candidates = ["dark", "light", "toggle"].filter((value) =>
        value.startsWith(prefix),
      );
    else if (kind) {
      // Resolve the parent directory but retain the typed prefix (such as ~/).
      const slash = prefix.lastIndexOf("/");
      const parent = slash === -1 ? "" : prefix.slice(0, slash + 1);
      const name = prefix.slice(slash + 1);
      const directory = getNodeByPath(
        state.filesystem,
        resolvePath(state.cwd, parent || "."),
      );
      if (directory?.type === "directory")
        candidates = directory.children
          .filter(
            (child) =>
              child.name.startsWith(name) &&
              (!child.name.startsWith(".") || name.startsWith(".")),
          )
          // Directories remain candidates for cat/launch so users can traverse
          // into a directory before completing the final file or app.
          .filter(
            (child) =>
              child.type === "directory" ||
              kind === "path" ||
              child.type === kind,
          )
          .map(
            (child) =>
              parent + child.name + (child.type === "directory" ? "/" : ""),
          );
    }
  }
  // Ambiguous matches are suggestions only; they never become submitted history.
  if (candidates.length !== 1)
    return { input: line, caret, suggestions: candidates };
  // Replace the whole token, including any text after a caret inside it.
  const wholeToken = tokenize(line, true).find(
    (token) => token.start === start,
  );
  const end = wholeToken?.end ?? caret;
  const replacement = quoteArgument(candidates[0]);
  return {
    input: line.slice(0, start) + replacement + line.slice(end),
    caret: start + replacement.length,
    suggestions: [],
  };
}
