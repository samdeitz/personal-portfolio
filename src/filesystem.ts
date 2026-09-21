import type { App } from "./appInfo";
import about from "./filesystem/about.txt?raw";
import skills from "./filesystem/skills.txt?raw";
import settings from "./filesystem/settings.conf?raw";

export type Directory = {
  type: "directory";
  name: string;
  children: FileNode[];
};

export type FileType = "directory" | "file" | "app";

export type FileNode =
  | {
      type: "directory";
      name: string;
      children: FileNode[];
    }
  | {
      type: "file";
      name: string;
      content: string;
    }
  | {
      type: "app";
      name: string;
      appID: App;
    };

export const filesystem: FileNode = {
  type: "directory",
  name: "/",
  children: [
    {
      type: "directory",
      name: "home",
      children: [
        {
          type: "directory",
          name: "sam",
          children: [
            {
              type: "directory",
              name: "Desktop",
              children: [
                {
                  type: "app",
                  name: "Workout Finder",
                  appID: "workout-finder",
                },
                {
                  type: "app",
                  name: "Rush Hour",
                  appID: "rush-hour",
                },
                {
                  type: "app",
                  name: "Dungeon Escape",
                  appID: "dungeon-escape",
                },
                {
                  type: "app",
                  name: "Loading Icon",
                  appID: "loading-icon",
                },
                {
                  type: "app",
                  name: "Snake",
                  appID: "snake",
                },
                {
                  type: "app",
                  name: "Pong",
                  appID: "pong",
                },
                {
                  type: "app",
                  name: "Punch-in Page",
                  appID: "punch-in-page",
                },
                {
                  type: "app",
                  name: "About Me",
                  appID: "about-me",
                },
                {
                  type: "app",
                  name: "Previous Work",
                  appID: "previous-work",
                },
              ],
            },

            {
              type: "directory",
              name: "Projects",
              children: [
                {
                  type: "app",
                  name: "Workout Finder",
                  appID: "workout-finder",
                },
                {
                  type: "app",
                  name: "Rush Hour",
                  appID: "rush-hour",
                },
                {
                  type: "app",
                  name: "Dungeon Escape",
                  appID: "dungeon-escape",
                },
                {
                  type: "app",
                  name: "Loading Icon",
                  appID: "loading-icon",
                },
                {
                  type: "app",
                  name: "Snake",
                  appID: "snake",
                },
                {
                  type: "app",
                  name: "Pong",
                  appID: "pong",
                },
                {
                  type: "app",
                  name: "Punch-in Page",
                  appID: "punch-in-page",
                },
              ],
            },

            {
              type: "directory",
              name: "Documents",
              children: [
                {
                  type: "file",
                  name: "about.txt",
                  content: about,
                },
                {
                  type: "file",
                  name: "skills.txt",
                  content: skills,
                },
                {
                  type: "file",
                  name: "resume.pdf",
                  content: "",
                },
              ],
            },

            {
              type: "directory",
              name: ".config",
              children: [
                {
                  type: "directory",
                  name: "portfolio",
                  children: [
                    {
                      type: "file",
                      name: "settings.conf",
                      content: settings,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default filesystem;
