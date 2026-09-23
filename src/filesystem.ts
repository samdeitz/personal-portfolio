import about from "./filesystem/about.txt?raw";
import skills from "./filesystem/skills.txt?raw";
import settings from "./filesystem/settings.conf?raw";
import apps, { type AppID } from "./apps/registry";
import { allProjects as projects } from "./projects";
import type { FileNode } from "./filesystem/types";
export type { Directory, FileType, FileNode } from "./filesystem/types";

const appEntry = (appID: AppID): FileNode => ({
  type: "app",
  name: apps[appID].title,
  appID,
});
const projectEntries = (): FileNode[] =>
  Object.values(projects).map((project) => appEntry(project.id));

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
                ...projectEntries(),
                appEntry("about-me"),
                appEntry("previous-work"),
              ],
            },

            {
              type: "directory",
              name: "Projects",
              children: projectEntries(),
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
