import viteLogo from "@/assets/icons/vite-logo.svg";
import tailwindLogo from "@/assets/icons/tailwind-logo.svg";
import svelteLogo from "@/assets/icons/svelte-logo.svg";
import reactLogo from "@/assets/icons/react-logo.svg";
import javaLogo from "@/assets/icons/java-logo.svg";
import nextLogoLight from "@/assets/icons/next-logo-light.svg";
import nextLogoDark from "@/assets/icons/next-logo-dark.svg";
import vercelLogoLight from "@/assets/icons/vercel-logo-light.svg";
import vercelLogoDark from "@/assets/icons/vercel-logo-dark.svg";
export const technologies = {
    Vite: {
      logo: viteLogo,
      href: "https://vite.dev/",
    },
    TailwindCSS: {
      logo: tailwindLogo,
      href: "https://tailwindcss.com/",
    },
    "React.js": {
      logo: reactLogo,
      href: "https://react.dev/",
    },
    Svelte: {
      logo: svelteLogo,
      href: "https://svelte.dev/",
    },
    "Next.js": {
      logo: nextLogoLight,
      darkLogo: nextLogoDark,
      href: "https://nextjs.org/",
    },
    Vercel: {
      logo: vercelLogoLight,
      darkLogo: vercelLogoDark,
      href: "https://vercel.com/",
    },
    Java: {
      logo: javaLogo,
      href: "https://www.java.com/en/",
    },
    "Java Swing Library": {
      logo: javaLogo,
      href: "https://docs.oracle.com/javase/7/docs/api/javax/swing/package-summary.html",
    },
    "Java HSA2 Library": {
      logo: javaLogo,
      href: "https://github.com/salamander2/HSA2",
    },
  };
export type Technology = keyof typeof technologies;
