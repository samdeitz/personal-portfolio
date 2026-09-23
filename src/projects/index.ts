import type { Project } from "./types";
import workoutFinder from "./workoutFinder";
import rushHour from "./rushHour";
import dungeonEscape from "./dungeonEscape";
import loadingIcon from "./loadingIcon";
import snake from "./snake";
import pong from "./pong";
import punchInPage from "./punchInPage";

import tract from "./tract";
import threeDWestern from "./threeDWestern";
import childcan from "./childcan";
import portfolio from "./portfolio";
import swingSync from "./swingSync";
import partyIslands from "./partyIslands";
import throwback from "./throwback";
import homeServer from "./homeServer";

export const desktopProjects = {
  [punchInPage.id]: punchInPage,
  [tract.id]: tract,
  [threeDWestern.id]: threeDWestern,
  [childcan.id]: childcan,
  [portfolio.id]: portfolio,
  [swingSync.id]: swingSync,
  [partyIslands.id]: partyIslands,
  [throwback.id]: throwback,
  [homeServer.id]: homeServer,
};

export const otherProjects = {
  [workoutFinder.id]: workoutFinder,
  [rushHour.id]: rushHour,
  [dungeonEscape.id]: dungeonEscape,
  [loadingIcon.id]: loadingIcon,
  [snake.id]: snake,
  [pong.id]: pong,
};

export const allProjects = {
  ...desktopProjects,
  ...otherProjects,
} as const satisfies Record<string, Project>;

export type ProjectID = keyof typeof allProjects;
export type ProjectTitle = (typeof allProjects)[ProjectID]["title"];
