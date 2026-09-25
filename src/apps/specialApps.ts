import type { AppShape } from "../content/types";

export const specialApps = {
  terminal: {
    kind: "special",
    id: "terminal",
    title: "Terminal",
    desktopImageSrc: "terminal.jpg",
  },
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
} as const satisfies Record<string, AppShape>;
