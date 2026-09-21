import type { CommandOutput } from "../components/desktop/apps/terminal/CommandOutput";
import { filesystem, type Directory } from "../filesystem";
import { getNodeByPath } from "./traversal";

export function getDashOptions(args: string[]): string[] {
  let res = [];
  for (const arg of args) {
    if (arg.startsWith("-")) {
      let processedArg = arg.slice(1, arg.length).split("");
      for (const argComponent of processedArg) {
        res.unshift(argComponent);
      }
    }
  }
  return res;
}

export function autoFill(
  fullCommand: string,
  currentPath: string,
): CommandOutput {
  const words = fullCommand.split(" ");
  const command = words[0];
  const phrase = words[words.length - 1]; // Phrase to autocomplete
  const currentNode = getNodeByPath(filesystem, currentPath) as Directory; // current node user is looking at in the filesystem

  const options = [];
  const addName = (name: string) => {
    options.unshift(name);
  };

  for (const child of currentNode.children) {
    if (command != phrase) {
      if (child.name.toLowerCase().startsWith(phrase.toLowerCase())) {
        switch (command) {
          case "cd":
          case "ls": {
            if (child.type === "directory") {
              addName(child.name);
            }
            break;
          }

          case "cat": {
            if (child.type === "file") {
              addName(child.name);
            }
            break;
          }

          case "launch": {
            if (child.type === "app") {
              addName(child.name);
            }
            break;
          }
        }
      }
    }
  }

  if (options.length === 1) return { type: "message", content: options[0] };
  else if (options.length === 0)
    return { type: "errorMessage", content: "No matches found" };
  else return { type: "list", content: options };
}

export const resolvePath = (currentPath: string, addition: string) => {
  return `${currentPath}/${addition}`;
};

export const parseCommand = (line: string): [string, string[]] => {
  const [name, ...args] = line.trim().match(/(?:[^\s"]+|"[^"]*")+/g);
  return [
    name,
    args.map((t) =>
      t.replace(/^"([^"]*)"$/, "$1").replace(/^'([^']*)'$/, "$1"),
    ),
  ];
};
