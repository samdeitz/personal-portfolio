import type { Project } from "./types";
import previewImage from "../assets/images/rush-hour-banner.jpg";

const rushHour = {
  kind: "project",
  id: "rush-hour",
  title: "Rush Hour",
  desktopImageSrc: "rush-hour.jpg",
  content: [
    {
      type: "image",
      src: previewImage,
      alt: "Rush Hour preview"
    },
    {
      type: "paragraph",
      text: "Details Coming soon..."
    },
    {
      type: "link",
      href: "https://github.com/samdeitz/rushhour",
      label: "Go to repo",
      icon: "github"
    },
    {
      type: "technologies",
      technologies: [
        "Java",
        "Java Swing Library"
      ]
    }
  ]
} as const satisfies Project;

export default rushHour;
