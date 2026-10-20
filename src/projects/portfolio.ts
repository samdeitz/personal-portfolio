import type { Project } from "./types";
import PortfolioBanner from "../assets/images/portfolio.jpg";

const portfolio = {
  kind: "project",
  id: "portfolio",
  title: "Portfolio Website",
  desktopImageSrc: "portfolio.png",
  metadata: {
    summary:
      "A desktop-inspired portfolio built from scratch around a custom Hyprland-style window manager. Projects, experience, search, themes, and terminal features all behave like applications inside the desktop environment.",
    status: "Deployed",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/samdeitz/personal-portfolio",
        icon: "github",
      },
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    banner: {
      src: PortfolioBanner,
      alt: "Website landing page",
    },
  },
  content: [],
  story: {
    "overview": {
      "eyebrow": "Portfolio Website",
      "headline": "A portfolio you can explore like a desktop.",
      "summary": "A custom window manager turns projects into apps, with a terminal, search, themes, and an interface that adapts to smaller screens.",
      "facts": [
        {
          "label": "My role",
          "value": "Design + development"
        },
        {
          "label": "Core system",
          "value": "Tiled window manager"
        },
        {
          "label": "Interaction",
          "value": "Desktop + mobile"
        }
      ],
      "stack": [
        "React",
        "TypeScript",
        "Tailwind CSS"
      ],
      "image": {
        "type": "figure",
        "src": PortfolioBanner,
        "alt": "Portfolio Website project preview",
        "caption": "Portfolio Website — project preview"
      }
    },
    "chapters": [
      {
        "id": "idea",
        "label": "The desktop idea",
        "eyebrow": "01 / The desktop idea",
        "title": "Make exploring the work part of the experience.",
        "blocks": [
          {
            "type": "figure",
            "src": PortfolioBanner,
            "alt": "Portfolio Website project preview",
            "caption": "The portfolio’s desktop interface."
          },
          {
            "type": "prose",
            "paragraphs": [
              "I did not want my portfolio to feel like a conventional list of cards and sections. I designed it as a desktop environment where projects, experience, and information about me behave like applications.",
              "The entire interface and interaction model were designed and built by me."
            ]
          }
        ]
      },
      {
        "id": "windows",
        "label": "Inside the windows",
        "eyebrow": "02 / Inside the windows",
        "title": "A layout built from a tree.",
        "blocks": [
          {
            "type": "flow",
            "label": "Window layout updates",
            "items": [
              {
                "label": "01",
                "title": "Action",
                "text": "Open, focus, minimize, restore, or close an app."
              },
              {
                "label": "02",
                "title": "Reducer",
                "text": "Update the windows and tree-based layout state."
              },
              {
                "label": "03",
                "title": "Layout",
                "text": "Calculate where each visible window belongs."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "The most important part of the project is the custom window manager. I liked the way Hyprland handles tiled windows, so I used that idea as the foundation for the portfolio.",
              "Users can open, focus, minimize, close, and interact with windows. I built the state manager using React Context, reducers, and tree-based state."
            ]
          },
          {
            "type": "details",
            "title": "More than window positions",
            "blocks": [
              {
                "type": "prose",
                "paragraphs": [
                  "The app also tracks themes and focused windows. Each terminal has its own directory, input, and command history, retained when the window is minimized."
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "interaction",
        "label": "Making it feel connected",
        "eyebrow": "03 / Making it feel connected",
        "title": "Several ways into the same work.",
        "blocks": [
          {
            "type": "split",
            "content": [
              {
                "type": "prose",
                "paragraphs": [
                  "The taskbar keeps track of minimized applications, while the search interface lets users find projects or apps by name and open them directly into a window.",
                  "The site also includes light and dark themes and a working terminal with a growing set of commands."
                ]
              },
              {
                "type": "callout",
                "label": "One app, several entry points",
                "text": "Desktop icons, search, and the terminal all open portfolio apps."
              }
            ],
            "visual": {
              "type": "figure",
              "src": PortfolioBanner,
              "alt": "Portfolio Website project preview",
              "caption": "Project preview reused to illustrate the desktop experience."
            }
          }
        ]
      },
      {
        "id": "small-screens",
        "label": "A smaller desktop",
        "eyebrow": "04 / A smaller desktop",
        "title": "Change the interaction, not just the scale.",
        "blocks": [
          {
            "type": "comparison",
            "items": [
              {
                "title": "Wide windows",
                "text": "Several apps can share a tiled layout."
              },
              {
                "title": "Narrow screens",
                "text": "One app is visible at a time. Other windows can stay minimized and be restored from the taskbar."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "A desktop window manager does not translate directly to a phone, so the mobile experience changes the interaction model instead of simply shrinking it."
            ]
          }
        ]
      }
    ]
  },

} as const satisfies Project;

export default portfolio;
