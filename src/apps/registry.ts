import type { AppShape } from "../content/types";
import { desktopProjects, allProjects } from "../projects";
import { specialApps } from "./specialApps";

export const apps: Record<string, AppShape> = {
  ...allProjects,
  ...specialApps,
};
export const desktopApps = { ...desktopProjects };
export type AppID = keyof typeof apps;
export type DesktopApp = (typeof apps)[AppID];
export type AppTitle = DesktopApp["title"];

export function getApp(id: string): DesktopApp | undefined {
  return Object.hasOwn(apps, id) ? apps[id as AppID] : undefined;
}
export default apps;
