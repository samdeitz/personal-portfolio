import { useTheme } from "@/context/ThemeContext.js"

import HBox from "../ui/HBox";
import githubWhite from "@/assets/icons/github-white.svg";
import githubBlack from "@/assets/icons/github-black.svg";

const AppElement = ({ element, currentApp, images }) => {
    const { isDark } = useTheme();

    switch (element.type) {
        case "RepoLink":
            return (
                <a className="self-center" href={currentApp.repoLink} target="_blank">
                    <HBox className="items-center gap-2 hover-over p-1 pr-2 rounded-lg cursor-pointer">
                            <img className="w-10" src={isDark ? githubWhite : githubBlack} />
                            <h1 className="h-fit">Go to repo</h1>
                    </HBox>
                </a>
            );
        case "HeaderImage":
            return (
                <img className="self-center w-full h-[200px] object-cover object-[50%_20%]" src={images[currentApp.appImageSrc]} />
            );

        case "Paragraph":
            return (
                <p className="p-4">
                    {element.text}
                </p>
            );
    }
}

export default AppElement;