import type { Project } from "./types";
import previewImage from "../assets/images/loading-banner.gif";

const loadingIcon = {
  kind: "project",
  id: "loading-icon",
  title: "Loading Icon",
  desktopImageSrc: "loading.jpg",
  content: [
    {
      type: "image",
      src: previewImage,
      alt: "Loading Icon preview"
    },
    {
      type: "paragraph",
      text: "Details Coming soon..."
    },
    {
      type: "link",
      href: "https://github.com/samdeitz/loadingicon",
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

export default loadingIcon;
