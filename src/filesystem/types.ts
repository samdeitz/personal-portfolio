import type { AppID } from "../apps/registry";

export type Directory = {
  type: "directory";
  name: string;
  children: FileNode[];
};

export type FileType = FileNode["type"];

export type FileNode =
  | Directory
  | {
      type: "file";
      name: string;
      content: string;
    }
  | {
      type: "app";
      name: string;
      appID: AppID;
    };
