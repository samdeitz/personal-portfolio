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
  content: [
    {
      type: "heading",
      text: "Turning an old computer into a server",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I found an old PC in my basement and turned it into a home server instead of letting it sit unused.",
    },
    {
      type: "paragraph",
      text: "I installed Ubuntu Server and began using the machine to host web applications, development services, and a remote notes vault. The project became a practical way to learn the infrastructure underneath the web applications I normally build.",
    },
    {
      type: "heading",
      text: "Learning Docker through real services",
      level: 3,
    },
    {
      type: "paragraph",
      text: "I learned Docker by containerizing the services I wanted to run.",
    },
    {
      type: "paragraph",
      text: "Web applications, the reverse proxy, and the notes vault each run in their own container. I wrote Docker images for the applications I wanted to host and connected the services through Docker networks for internal communication.",
    },
    {
      type: "heading",
      text: "Routing traffic through Caddy",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Caddy runs as the reverse proxy for the public-facing services.",
    },
    {
      type: "paragraph",
      text: "The server exposes ports 80 and 443 for HTTP and HTTPS traffic, while Caddy routes incoming requests to the appropriate container on the internal Docker network.",
    },
    {
      type: "paragraph",
      text: "This gave me hands-on experience with reverse proxies, service routing, domains, HTTPS, and container networking.",
    },
    {
      type: "heading",
      text: "Keeping administration private with Tailscale",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Not every service needs to be publicly available.",
    },
    {
      type: "paragraph",
      text: "I configured Tailscale so I can securely access and administer the server from my laptop over a private network without exposing administrative services directly to the internet.",
    },
    {
      type: "paragraph",
      text: "The server continues to be an environment where I can experiment with Linux, deployment, networking, and self-hosting using services I actually maintain.",
    },
  ],
} as const satisfies Project;

export default homeServer;
