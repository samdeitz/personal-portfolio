import type { AppShape } from "../content/types";

export const specialApps: Record<string, AppShape> = {
  "about-me": {
    kind: "special",
    id: "about-me",
    title: "About Me",
    desktopImageSrc: "abt-me.jpg",
  },
  "previous-work": {
    kind: "special",
    id: "previous-work",
    title: "Previous Work",
    desktopImageSrc: "work.jpg",
  },
  terminal: {
    kind: "special",
    id: "terminal",
    title: "Terminal",
    desktopImageSrc: "terminal.jpg",
  },
} as const;
