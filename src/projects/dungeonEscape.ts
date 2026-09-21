import type { Project } from "./types";
import previewImage from "../assets/images/escape-banner.jpg";

const dungeonEscape = {
  kind: "project",
  id: "dungeon-escape",
  title: "Dungeon Escape",
  desktopImageSrc: "escape.jpg",
  content: [
    {
      type: "image",
      src: previewImage,
      alt: "Dungeon Escape preview",
      className: "object-left"
    },
    {
      type: "paragraph",
      text: "Details Coming soon..."
    },
    {
      type: "link",
      href: "https://github.com/samdeitz/riddlegame",
      label: "Go to repo",
      icon: "github"
    },
    {
      type: "technologies",
      technologies: [
        "Java"
      ]
    }
  ]
} as const satisfies Project;

export default dungeonEscape;
