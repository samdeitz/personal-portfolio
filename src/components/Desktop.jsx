import Card from "./Card.jsx";
import apps from "../appInfo.js";
import { useApp } from "../AppContext.js";

const appImages = import.meta.glob("../assets/*.jpg", {eager: true});


const Desktop = () => {
    const { openApp } = useApp();

    return (
        <div className="
        grid
        grid-cols-4
        grid-rows-3
        w-full
        transition-all
        duration-1000
        ease-in-out
        2xl:pl-40
        xl:pl-30
        lg:pl-20
        md:pl-10
        text-md
        @max-md:text-sm
        
        mt-10
        gap-x-4
        z-98
        ">
            {
                Object.values(apps).map((a) => {
                    return <Card key={a.id} className={`hover:animate-shake ${a.position}`} apptitle={a.title} onClick={() => openApp(`app${a.id}`)} imgsrc={appImages[a.desktopImageSrc]?.default}/>
                })
            }
        </div>
    )
}

export default Desktop;