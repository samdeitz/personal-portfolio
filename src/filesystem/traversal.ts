import { type FileNode, type Directory, filesystem } from "../filesystem";

export function getNodeByPath(root: FileNode, path: string): Directory | null {
  const parts = path.split("/").filter(Boolean);

  let current: FileNode = root;

  for (const part of parts) {
    if (current.type !== "directory") {
      return null;
    }

    const next = current.children.find((child) => child.name === part);

    if (!next) {
      return null;
    }

    current = next;
  }

  return (current as Directory) || null;
}

export const getParent = (currPath: string) => {
  const currPathSplit = currPath.split("/");
  const parentsPath = currPathSplit
    .slice(0, currPathSplit.length - 1)
    .join("/");
  return getNodeByPath(filesystem, parentsPath);
};

export const findChild = (currPath: string, query: string) => {
  let result = null;
  const currNode = getNodeByPath(filesystem, currPath);
  for (const child of currNode.children) {
    if (child.name === query) result = child;
  }
  return result;
};

export const resolveTarget = (currPath: string, appToOpen: string): string => {
  const app = findChild(currPath, appToOpen);
  if (!app || app.type != "app") return null;

  return app.appID;
};
