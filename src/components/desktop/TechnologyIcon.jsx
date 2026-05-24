import viteLogo from "@/assets/icons/vite-logo.svg";
import tailwindLogo from "@/assets/icons/tailwind-logo.svg";
import svelteLogo from "@/assets/icons/svelte-logo.svg";
import reactLogo from "@/assets/icons/react-logo.svg";
import javaLogo from "@/assets/icons/java-logo.svg";
import nextLogoLight from "@/assets/icons/next-logo-light.svg";
import nextLogoDark from "@/assets/icons/next-logo-dark.svg";
import vercelLogoLight from "@/assets/icons/vercel-logo-light.svg";
import vercelLogoDark from "@/assets/icons/vercel-logo-dark.svg";
import { useTheme } from "@/context/ThemeContext.js";

const TechnologyIcon = ({ technology }) => {
  const { isDark } = useTheme();

  const techInfo = {
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
      logo: isDark ? nextLogoDark : nextLogoLight,
      href: "https://nextjs.org/",
    },
    Vercel: {
      logo: isDark ? vercelLogoDark : vercelLogoLight,
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

  return (
    <a
      href={techInfo[technology].href}
      target="_blank"
      className="group block perspective-[1000px] cursor-default"
    >
      <div className="relative transition-transform duration-400 transform-3d group-hover:rotate-y-180">
        {/* front */}
        <div className="relative w-full h-full p-2 flex items-center justify-center backface-hidden pointer-events-none border rounded-xl">
          <p>{technology}</p>
        </div>

        {/* back */}
        <div
          className={`absolute top-0 left-0 w-full h-full p-2 flex items-center justify-center backface-hidden rotate-y-180 pointer-events-none ${isDark ? "bg-dark-grey" : "bg-light-grey"} border rounded-xl`}
        >
          <img className="w-5" src={techInfo[technology].logo} alt="vite" />
        </div>
      </div>
    </a>
  );
};

export default TechnologyIcon;

