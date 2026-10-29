import type { Project } from "./types";
import islandsBanner from "../assets/images/party-islands-banner.jpg";
import dead from "../assets/storyImages/partyIslands/death.png";
import lobby from "../assets/storyImages/partyIslands/lobby.png";
import gameplay from "../assets/storyImages/partyIslands/gameplay.png";
import postGame from "../assets/storyImages/partyIslands/postGame.png";

const partyIslands = {
  kind: "project",
  id: "party-islands",
  title: "Party Islands",
  desktopImageSrc: "islandBg.jpg",
  metadata: {
    summary:
      "A real-time multiplayer typing game built in Java Swing by a five-person team. I co-led the project and focused on UDP lobby discovery, application navigation architecture, and several major player-facing screens.",
    status: "Completed",
    links: [
      {
        label: "View course repository",
        href: "https://gitlab.sci.uwo.ca/courses/2026/01/COMPSCI2212/group44/-/tree/28d4dbca10e28def07f63d0d3bf2d2ff4b349f38/",
        icon: "open",
      },
    ],
    technologies: ["Java", "Java Swing", "UDP", "Sockets"],
    banner: {
      src: islandsBanner,
      alt: "Party Islands Banner",
    },
  },
  content: [],
  story: {
    overview: {
      eyebrow: "Party Islands",
      headline: "Find a lobby. Race your friends.",
      summary:
        "A multiplayer typing game combining LAN discovery, real-time progress, and a shared flow through more than ten screens.",
      facts: [
        {
          label: "My role",
          value: "One of 3 co-leads",
        },
        {
          label: "Team",
          value: "5 people",
        },
        {
          label: "Duration",
          value: "1½ months",
        },
      ],
      stack: ["Java Swing", "UDP", "Sockets"],
      image: {
        type: "figure",
        src: islandsBanner,
        alt: "Party Islands project preview",
        caption: "Party Islands: project preview",
      },
    },
    chapters: [
      {
        id: "play",
        label: "The player experience",
        eyebrow: "01 / The player experience",
        title: "Three rounds. Every keystroke counts.",
        blocks: [
          {
            type: "split",
            splitImagesVert: true,
            visual: [
              {
                type: "figure",
                src: lobby,
                alt: "Game lobby screen",
                caption: "Game lobby screen, joinable over LAN",
              },
              {
                type: "figure",
                src: gameplay,
                alt: "Gameplay screen",
                caption:
                  "Typeracer gameplay screen. Includes multiplayer functionality, power-ups, and health",
              },
              {
                type: "figure",
                src: dead,
                alt: "You lose screen",
                caption:
                  "You lost. Your boat gets crossed out and others continue until everyone is done",
              },
              {
                type: "figure",
                src: postGame,
                alt: "Leaderboard",
                caption:
                  "Leaderboard from the previous round. Showing your stats and comparing them to opponents.",
              },
            ],
          },

          {
            type: "prose",
            paragraphs: [
              "Players compete across three typing rounds, lose life for mistakes, use power-ups, and can see other players' progress in real time.",
            ],
          },
          {
            type: "callout",
            label: "My part of the build",
            text: "I focused on UDP lobby discovery, navigation architecture, and major player-facing screens.",
          },
        ],
      },
      {
        id: "network",
        label: "Finding each other",
        eyebrow: "02 / Finding each other",
        title: "Make the local network discoverable.",
        blocks: [
          {
            type: "split",
            splitImagesVert: true,
            splitContentVert: false,
            content: [
              {
                type: "flow",
                label: "LAN lobby discovery",
                items: [
                  {
                    label: "01",
                    title: "Host",
                    text: "Broadcast lobby information over UDP.",
                  },
                  {
                    label: "02",
                    title: "Discover",
                    text: "Scan for rooms from the Find Lobby screen.",
                  },
                  {
                    label: "03",
                    title: "Join",
                    text: "Use the broadcast information to join a room and ready up.",
                  },
                ],
              },
              {
                type: "prose",
                paragraphs: [
                  "My largest networking contribution was the LAN lobby discovery system.",
                  "Hosts broadcast lobby information using UDP sockets. From the Find Lobby screen, players can scan the local network, see available rooms, and join one using information contained in the host's broadcast.",
                  "Inside the lobby, players use their account name, receive an assigned color, ready up, and enter the game together.",
                ],
              },
            ],
            visual: [
              {
                type: "figure",
                src: lobby,
                alt: "Game lobby screen",
                caption: "Game lobby screen, sends UDP broadcasts over LAN",
              },
              {
                type: "figure",
                src: lobby,
                alt: "Find lobby screen",
                caption:
                  "Find lobby screen, recieves UDP packets sent over LAN, and lists rooms based on their data",
              },
            ],
          },
        ],
      },
      {
        id: "screens",
        label: "Keeping screens connected",
        eyebrow: "03 / Keeping screens connected",
        title: "Navigation without a web of references.",
        blocks: [
          {
            type: "comparison",
            items: [
              {
                title: "Static screens",
                text: "Reuse screens after initialization.",
              },
              {
                title: "Dynamic screens",
                text: "Create a screen when its state depends on the current session.",
              },
            ],
          },
          {
            type: "prose",
            paragraphs: [
              "The application had more than 10 screens, and I did not want individual screens to hold direct references to every other screen they could navigate to.",
              "I designed an EventBus-based window manager that lets screens request navigation at a higher level.",
              "Static screens can be reused after initialization, while dynamic screens can be created when their state depends on the current session. This gave us a consistent way to manage screen transitions across the application.",
            ],
          },
          {
            type: "details",
            title: "Building and testing the flow",
            blocks: [
              {
                type: "prose",
                paragraphs: [
                  "I implemented the login, lobby discovery, broadcast-room, waiting-room, and player-facing interfaces using reusable Swing components.",
                  "The project also went through requirements gathering, UML design, implementation, and testing, including tests for parts of the EventBus and UDP networking.",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
} as const satisfies Project;

export default partyIslands;
