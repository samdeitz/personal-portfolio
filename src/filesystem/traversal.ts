import type { FileNode } from "./types";

export const HOME_PATH = "/home/sam";

// Normalize paths without looking them up; callers separately validate existence/type.
// Popping an empty stack keeps attempts to move above root at "/".
export function resolvePath(cwd: string, target: string): string {
  const expanded =
    target === "~"
      ? HOME_PATH
      : target.startsWith("~/")
        ? HOME_PATH + target.slice(1)
        : target;
  const parts: string[] = [];
  for (const part of (expanded.startsWith("/")
    ? expanded
    : `${cwd}/${expanded}`
  ).split("/")) {
    if (!part || part === ".") continue;
    if (part === "..") parts.pop();
    else parts.push(part);
  }
  return "/" + parts.join("/");
}

// Return the actual node type; a matching file must never be cast into a directory.
export function getNodeByPath(root: FileNode, path: string): FileNode | null {
  let current = root;
  for (const part of resolvePath("/", path).split("/").filter(Boolean)) {
    if (current.type !== "directory") return null;
    const next = current.children.find((child) => child.name === part);
    if (!next) return null;
    current = next;
  }
  return current;
}
