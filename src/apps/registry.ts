import type { Project } from "../projects/types";
import { desktopProjects, allProjects } from "../projects";
import { specialApps } from "./specialApps";

export type DesktopApp = Project | (typeof specialApps)[keyof typeof specialApps];

export const apps: Record<string, DesktopApp> = {
  ...allProjects,
  ...specialApps,
};
export const desktopApps = { ...specialApps, ...desktopProjects };
export type AppID = keyof typeof apps;
export type AppTitle = DesktopApp["title"];

export function getApp(id: string): DesktopApp | undefined {
  return Object.hasOwn(apps, id) ? apps[id as AppID] : undefined;
}
export default apps;
