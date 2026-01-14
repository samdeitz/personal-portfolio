import Card from "./Card.jsx";
import apps from "@/appInfo.js";
import HBox from "@/components/ui/HBox.jsx";
import { useApp } from "@/AppContext.js";

const appImages = import.meta.glob("@/assets/*.jpg", {
    eager: true,
    import: "default"
});

// change keys to be by image name rather than path
const imagesByName = Object.fromEntries(
  Object.entries(appImages).map(([path, url]) => [path.split("/").pop(), url])
);

const Desktop = () => {
    const { openApp } = useApp();

    return (
        <HBox className="
            flex-wrap
            @max-[78rem]:justify-between
            @max-[78rem]:m-auto
            w-3/4
            h-100vh
            transition-all
            duration-1000
            ease-in-out
            text-md
            @max-md:text-sm
            ml-10
            pb-20
            gap-8
            z-98
            ">
            {
                Object.values(apps).map((a) => {
                    return <Card key={a.id} className={`${a.position}`} apptitle={a.title} onClick={() => openApp(`app${a.id}`)} imgsrc={imagesByName[a.desktopImageSrc]}/>
                })
            }
        </HBox>
    )
}

export default Desktop;