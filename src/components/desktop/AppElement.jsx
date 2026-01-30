import { useTheme } from "@/context/ThemeContext.js"

import HBox from "../ui/HBox";
import githubWhite from "@/assets/icons/github-white.svg";
import githubBlack from "@/assets/icons/github-black.svg";
import openWhite from "@/assets/icons/open-white.svg";
import openBlack from "@/assets/icons/open-black.svg";
import TechnologyIcon from "./TechnologyIcon";

const AppElement = ({ element, currentApp, images }) => {
    const { isDark } = useTheme();

    switch (element.type) {
        case "RepoLink":
            return (
                <a key={currentApp.id} className="self-center" href={currentApp.repoLink} target="_blank">
                    <HBox className="items-center h-12 gap-2 hover-over p-1 pr-2 rounded-lg cursor-pointer">
                            <img className="w-10" src={isDark ? githubWhite : githubBlack} />
                            <h1 className="h-fit">Go to repo</h1>
                    </HBox>
                </a>
            );
        case "HeaderImage":
            return (
                <img key={currentApp.id} className={`${element.className ? element.className : ""} self-center w-full h-[250px] object-cover`} src={images[currentApp.appImageSrc]} />
            );

        case "Paragraph":
            return (
                <p key={currentApp.id} className="p-4">
                    {element.text}
                </p>
            );

        case "Route":
            return (
                <a key={currentApp.id} className="self-center" href={currentApp.route} target="_blank">
                    <HBox className="items-center h-12 gap-2 hover-over p-1 pl-2 rounded-lg cursor-pointer">
                            <h1 className="h-fit">Visit Site</h1>
                            <img className="w-5" src={isDark ? openWhite : openBlack} />
                    </HBox>
                </a>
            );

        case "Horizontal Box":
            return (
                <HBox className="ml-4 gap-4 h-10 self-start" key={currentApp.id}>
                    {
                        element.content.map((e, index) => {
                            return (
                                <AppElement key={index} element={e} currentApp={currentApp} images={images}></AppElement>
                            );
                        })
                    }
                </HBox>
            );

        case "Tech Stack":
            return (
                <HBox className="ml-4 gap-4 self-start">
                    {
                        element.content.map((e) => {
                            return (
                                <TechnologyIcon technology={e.technology}></TechnologyIcon>                        
                            );
                        })
                    }
                </HBox>
            );

    }
}

export default AppElement;