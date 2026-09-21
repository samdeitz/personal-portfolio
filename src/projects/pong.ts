import type { Project } from "./types";
import previewImage from "../assets/images/pong-banner.jpg";

const pong = {
  kind: "project",
  id: "pong",
  title: "Pong",
  desktopImageSrc: "pong.jpg",
  content: [
    {
      type: "image",
      src: previewImage,
      alt: "Pong preview"
    },
    {
      type: "paragraph",
      text: "Details Coming soon..."
    },
    {
      type: "link",
      href: "https://github.com/samdeitz/pong",
      label: "Go to repo",
      icon: "github"
    },
    {
      type: "technologies",
      technologies: [
        "Java",
        "Java HSA2 Library"
      ]
    }
  ]
} as const satisfies Project;

export default pong;
