import type { Project } from "./types";

const homeServer = {
  kind: "project",
  id: "home-server",
  title: "Home Server",
  desktopImageSrc: "server.png",
  metadata: {
    summary:
      "A self-hosted Ubuntu server built from an old PC to learn Linux, Docker, networking, reverse proxies, and remote infrastructure. It now runs containerized web applications, a notes vault, Caddy, and private remote access through Tailscale.",
    status: "Active",
    links: [],
    technologies: [
      "Ubuntu Server",
      "Linux",
      "Docker",
      "Docker Networking",
      "Caddy",
      "HTTP",
      "HTTPS",
      "TLS",
      "Tailscale",
    ],
  },
  content: [],
  story: {
    "overview": {
      "eyebrow": "Home Server",
      "headline": "An old PC. A useful new job.",
      "summary": "A home server for real services—and a hands-on way to learn the infrastructure beneath my applications.",
      "facts": [
        {
          "label": "My role",
          "value": "Setup + administration"
        },
        {
          "label": "Platform",
          "value": "Ubuntu Server"
        },
        {
          "label": "Environment",
          "value": "Self-hosted"
        }
      ],
      "stack": [
        "Docker",
        "Caddy",
        "Tailscale"
      ]
    },
    "chapters": [
      {
        "id": "machine",
        "label": "A second life",
        "eyebrow": "01 / A second life",
        "title": "Start with the hardware already on hand.",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "I found an old PC in my basement and turned it into a home server instead of letting it sit unused.",
              "I installed Ubuntu Server and began using the machine to host web applications, development services, and a remote notes vault. The project became a practical way to learn the infrastructure underneath the web applications I normally build."
            ]
          },
          {
            "type": "callout",
            "label": "The approach",
            "text": "Learn infrastructure by hosting services I actually use."
          }
        ]
      },
      {
        "id": "services",
        "label": "Running real services",
        "eyebrow": "02 / Running real services",
        "title": "Give each service its own space.",
        "blocks": [
          {
            "type": "comparison",
            "items": [
              {
                "title": "Application containers",
                "text": "Web applications and a remote notes vault run as separate services."
              },
              {
                "title": "Shared infrastructure",
                "text": "Caddy and Docker networks connect the services without combining them into one process."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "I learned Docker by containerizing the services I wanted to run.",
              "Web applications, the reverse proxy, and the notes vault each run in their own container. I wrote Docker images for the applications I wanted to host and connected the services through Docker networks for internal communication."
            ]
          }
        ]
      },
      {
        "id": "network",
        "label": "Public and private",
        "eyebrow": "03 / Public and private",
        "title": "Two paths into the same machine.",
        "blocks": [
          {
            "type": "flow",
            "label": "Public request routing",
            "items": [
              {
                "label": "01",
                "title": "Internet",
                "text": "Incoming HTTP and HTTPS traffic on ports 80 and 443."
              },
              {
                "label": "02",
                "title": "Caddy",
                "text": "Route the request through the reverse proxy."
              },
              {
                "label": "03",
                "title": "Docker network",
                "text": "Reach the appropriate application container."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "This gave me hands-on experience with reverse proxies, service routing, domains, HTTPS, and container networking."
            ]
          },
          {
            "type": "comparison",
            "items": [
              {
                "title": "Public access",
                "text": "Web services are reachable through Caddy."
              },
              {
                "title": "Private administration",
                "text": "Tailscale connects my laptop to the server without exposing administration directly to the internet."
              }
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "I configured Tailscale so I can securely access and administer the server from my laptop over a private network without exposing administrative services directly to the internet."
            ]
          },
          {
            "type": "callout",
            "label": "Still evolving",
            "text": "The server continues to be an environment where I can experiment with Linux, deployment, networking, and self-hosting using services I actually maintain."
          }
        ]
      }
    ]
  },

} as const satisfies Project;

export default homeServer;
