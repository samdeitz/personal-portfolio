import Card from "./AppCard.jsx";
import apps from "@/appInfo.js";
import HBox from "@/components/ui/HBox.jsx";
import { useApp } from "@/context/AppContext.js";


// Glob images for apps
const appImages = import.meta.glob("@/assets/icons/appIcons/*.jpg", {
    eager: true,
    import: "default"
});

// change keys to be by image name rather than path
const imagesByName = Object.fromEntries(
  Object.entries(appImages).map(([path, url]) => [path.split("/").pop(), url])
);

const Desktop = () => {
    const { openApp } = useApp(); // Get function to open an app

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
                // Render all apps on desktop from appInfo.js
                Object.values(apps).map((a) => {
                    return <Card key={a.id} className={`${a.position}`} apptitle={a.title} onClick={() => openApp(a.title)} imgsrc={imagesByName[a.desktopImageSrc]}/>
                })
            }
        </HBox>
    )
}

export default Desktop;