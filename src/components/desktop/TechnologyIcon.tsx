import { technologies, type Technology } from "../../content/technologies";

const TechnologyIcon = ({ technology }: { technology: Technology }) => {

  const info = technologies[technology];
  const Icon = "Icon" in info ? info.Icon : null;

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
          className="absolute top-0 left-0 w-full h-full p-2 flex items-center justify-center backface-hidden rotate-y-180 pointer-events-none bg-theme-surface border rounded-xl"
        >
          {Icon ? (
            <Icon className="size-5" aria-hidden="true" />
          ) : "logo" in info ? (
            <img className="w-5" src={info.logo} alt={technology} />
          ) : null}
        </div>
      </div>
    </a>
  );
};

export default TechnologyIcon;

