export type AppTitle =
  | "Workout Finder"
  | "Rush Hour"
  | "Dungeon Escape"
  | "Loading Icon"
  | "Snake"
  | "Pong"
  | "Punch-in Page"
  | "About Me"
  | "Previous Work"
  | "Website Images"
  | "Terminal";

export type App =
  | "workout-finder"
  | "rush-hour"
  | "dungeon-escape"
  | "loading-icon"
  | "snake"
  | "pong"
  | "punch-in-page"
  | "about-me"
  | "previous-work"
  | "terminal";

export type DesktopApp = {
  id: string;
  title: AppTitle;
  appImageSrc?: string;
  desktopImageSrc: string;
  route?: string;
  repoLink?: string;
};

export const apps: Record<string, DesktopApp> = {
  // --------- PROJECTS ---------
  "workout-finder": {
    id: "workout-finder",
    title: "Workout Finder",
    appImageSrc: "exercise-finder-banner.jpg",
    desktopImageSrc: "exercise-finder.jpg",
    route: "/exercisefinder",
    repoLink: "https://github.com/samdeitz/exercisefinder",
  },
  "rush-hour": {
    id: "rush-hour",
    title: "Rush Hour",
    appImageSrc: "rush-hour-banner.jpg",
    desktopImageSrc: "rush-hour.jpg",
    repoLink: "https://github.com/samdeitz/rushhour",
  },
  "dungeon-escape": {
    id: "dungeon-escape",
    title: "Dungeon Escape",
    appImageSrc: "escape-banner.jpg",
    desktopImageSrc: "escape.jpg",
    repoLink: "https://github.com/samdeitz/riddlegame",
  },
  "loading-icon": {
    id: "loading-icon",
    title: "Loading Icon",
    appImageSrc: "loading-banner.gif",
    desktopImageSrc: "loading.jpg",
    repoLink: "https://github.com/samdeitz/loadingicon",
  },
  snake: {
    id: "snake",
    title: "Snake",
    appImageSrc: "snake-banner.jpg",
    desktopImageSrc: "snake.jpg",
    repoLink: "https://github.com/samdeitz/snakegame",
  },
  pong: {
    id: "pong",
    title: "Pong",
    appImageSrc: "pong-banner.jpg",
    desktopImageSrc: "pong.jpg",
    repoLink: "https://github.com/samdeitz/pong",
  },
  "Punch-in Page": {
    id: "punch-in-page",
    title: "Punch-in Page",
    appImageSrc: "punch-in-banner2.jpg",
    desktopImageSrc: "punch-in.jpg",
    route: "/md-punch-in",
    repoLink: "https://github.com/samdeitz/md-punch-in",
  },

  // --------- OTHER THINGS ---------
  "about-me": {
    id: "about-me",
    title: "About Me",
    appImageSrc: "family.jpg",
    desktopImageSrc: "abt-me.jpg",
  },
  "previous-work": {
    id: "previous-work",
    title: "Previous Work",
    appImageSrc: "sample.jpg",
    desktopImageSrc: "logo-dark.png",
  },
  terminal: {
    id: "terminal",
    title: "Terminal",
    desktopImageSrc: "logo-dark.png",
    appImageSrc: "logo-dark.png",
  },
};

export default apps;
