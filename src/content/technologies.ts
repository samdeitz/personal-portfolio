import {
  SiApachemaven,
  SiCaddy,
  SiChartdotjs,
  SiDocker,
  SiFigma,
  SiFramer,
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiGradle,
  SiJavascript,
  SiJitpack,
  SiLinux,
  SiMeta,
  SiNextdotjs,
  SiPayloadcms,
  SiRadixui,
  SiReact,
  SiSanity,
  SiSvelte,
  SiSwr,
  SiTailscale,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiVite,
  SiWebflow,
} from "react-icons/si";
import {
  FaAws,
  FaClock,
  FaDiagramProject,
  FaGlobe,
  FaJava,
  FaLock,
  FaMicrosoft,
  FaNetworkWired,
  FaPenRuler,
} from "react-icons/fa6";

export const technologies = {
  Vite: {
    Icon: SiVite,
    href: "https://vite.dev/",
  },
  "Tailwind CSS": {
    Icon: SiTailwindcss,
    href: "https://tailwindcss.com/",
  },
  React: {
    Icon: SiReact,
    href: "https://react.dev/",
  },
  Svelte: {
    Icon: SiSvelte,
    href: "https://svelte.dev/",
  },
  "Next.js": {
    Icon: SiNextdotjs,
    href: "https://nextjs.org/",
  },
  Vercel: {
    Icon: SiVercel,
    href: "https://vercel.com/",
  },
  Java: {
    Icon: FaJava,
    href: "https://www.java.com/en/",
  },
  "Java Swing": {
    Icon: FaJava,
    href: "https://docs.oracle.com/javase/7/docs/api/javax/swing/package-summary.html",
  },
  "Java HSA2 Library": {
    Icon: FaJava,
    href: "https://github.com/salamander2/HSA2",
  },
  JavaScript: {
    Icon: SiJavascript,
    href: undefined,
  },
  "Payload CMS": {
    Icon: SiPayloadcms,
    href: undefined,
  },

  "AWS EC2": {
    Icon: FaAws,
    href: undefined,
  },
  "Amazon RDS": {
    Icon: FaAws,
    href: undefined,
  },
  "Amazon S3": {
    Icon: FaAws,
    href: undefined,
  },
  "Microsoft Clarity": {
    Icon: FaMicrosoft,
    href: undefined,
  },
  "Google Analytics": {
    Icon: SiGoogleanalytics,
    href: undefined,
  },
  "Google Search Console": {
    Icon: SiGooglesearchconsole,
    href: undefined,
  },
  "Chart.js": {
    Icon: SiChartdotjs,
    href: undefined,
  },
  TypeScript: {
    Icon: SiTypescript,
    href: undefined,
  },
  "Radix UI": {
    Icon: SiRadixui,
    href: undefined,
  },
  SWR: {
    Icon: SiSwr,
    href: undefined,
  },
  "Meta API": {
    Icon: SiMeta,
    href: undefined,
  },
  cron: {
    Icon: FaClock,
    href: undefined,
  },
  Figma: {
    Icon: SiFigma,
    href: undefined,
  },
  Sanity: {
    Icon: SiSanity,
    href: undefined,
  },
  Webflow: {
    Icon: SiWebflow,
    href: undefined,
  },
  Reflection: {
    Icon: FaJava,
    href: undefined,
  },
  ClassLoaders: {
    Icon: FaJava,
    href: undefined,
  },
  WatchService: {
    Icon: FaJava,
    href: undefined,
  },
  JitPack: {
    Icon: SiJitpack,
    href: undefined,
  },
  Maven: {
    Icon: SiApachemaven,
    href: undefined,
  },
  Gradle: {
    Icon: SiGradle,
    href: undefined,
  },
  UDP: {
    Icon: FaNetworkWired,
    href: undefined,
  },
  Sockets: {
    Icon: FaNetworkWired,
    href: undefined,
  },
  Framer: {
    Icon: SiFramer,
    href: undefined,
  },
  "Product Design": {
    Icon: FaPenRuler,
    href: undefined,
  },
  "Ubuntu Server": {
    Icon: SiUbuntu,
    href: undefined,
  },
  Linux: {
    Icon: SiLinux,
    href: undefined,
  },
  Docker: {
    Icon: SiDocker,
    href: undefined,
  },
  "Docker Networking": {
    Icon: SiDocker,
    href: undefined,
  },
  Caddy: {
    Icon: SiCaddy,
    href: undefined,
  },
  HTTP: {
    Icon: FaGlobe,
    href: undefined,
  },
  HTTPS: {
    Icon: FaLock,
    href: undefined,
  },
  TLS: {
    Icon: FaLock,
    href: undefined,
  },
  Tailscale: {
    Icon: SiTailscale,
    href: undefined,
  },
};
export type Technology = keyof typeof technologies;
