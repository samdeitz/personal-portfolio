import { technologies, type Technology } from "../../content/technologies";
import { useTheme } from "../../context/ThemeContext";

const TechnologyIcon = ({ technology }: { technology: Technology }) => {
  const { isDark } = useTheme();

  const info = technologies[technology];
  const logo = isDark && "darkLogo" in info ? info.darkLogo : info.logo;

  return (
    <a
      href={info.href}
      target="_blank"
      rel="noopener noreferrer"
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
          <img className="w-5" src={logo} alt={technology} />
        </div>
      </div>
    </a>
  );
};

export default TechnologyIcon;

