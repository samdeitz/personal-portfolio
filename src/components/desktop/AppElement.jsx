import { useTheme } from "@/context/ThemeContext.js";

import HBox from "../ui/HBox";
import githubWhite from "@/assets/icons/github-white.svg";
import githubBlack from "@/assets/icons/github-black.svg";
import openWhite from "@/assets/icons/open-white.svg";
import openBlack from "@/assets/icons/open-black.svg";
import TechnologyIcon from "./TechnologyIcon";
import Terminal from "./apps/Terminal";

const AppElement = ({ element, currentApp, images }) => {
  const { isDark } = useTheme();

  switch (element.type) {
    case "RepoLink":
      return (
        <a
          key={currentApp.id}
          className="self-start ml-4"
          href={currentApp.repoLink}
          target="_blank"
        >
          <HBox className="items-center h-12 gap-2 hover-over p-1 pr-2 rounded-lg cursor-pointer">
            <img className="w-10" src={isDark ? githubWhite : githubBlack} />
            <h1 className="h-fit">Go to repo</h1>
          </HBox>
        </a>
      );
    case "HeaderImage":
      return (
        <img
          key={currentApp.id}
          className={`${element?.className} self-center h-2/5 max-w-full min-w-0 w-full block object-cover`}
          src={images[currentApp.appImageSrc]}
        />
      );

    case "Paragraph":
      return (
        <p key={currentApp.id} className="p-4">
          {element.text}
        </p>
      );

    case "Route":
      return (
        <a
          key={currentApp.id}
          className="self-start ml-4"
          href={currentApp.route}
          target="_blank"
        >
          <HBox className="items-center h-12 gap-2 hover-over p-1 pl-2 rounded-lg cursor-pointer">
            <h1 className="h-fit">Visit Site</h1>
            <img className="w-5" src={isDark ? openWhite : openBlack} />
          </HBox>
        </a>
      );

    case "Horizontal Box":
      return (
        <HBox className="self-start" key={currentApp.id}>
          {element.content.map((e, index) => {
            return (
              <AppElement
                key={index}
                element={e}
                currentApp={currentApp}
                images={images}
              ></AppElement>
            );
          })}
        </HBox>
      );

    case "Tech Stack":
      return (
        <HBox className="ml-4 gap-4 self-start">
          {element.content.map((e, index) => {
            return (
              <TechnologyIcon
                key={index}
                technology={e.technology}
              ></TechnologyIcon>
            );
          })}
        </HBox>
      );
    case "Terminal":
      return <Terminal></Terminal>;
  }
};

export default AppElement;
