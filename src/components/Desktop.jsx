import Card from "./Card.jsx";
import apps from "../appInfo.js";
import HBox from "./ui/HBox.jsx";
import { useApp } from "../AppContext.js";

const appImages = import.meta.glob("../assets/*.jpg", {eager: true});


const Desktop = () => {
    const { openApp } = useApp();

    return (
        // <div className="
        // mb-15
        // grid
        // grid-cols-4
        // grid-rows-3
        // w-full
        // transition-all
        // duration-1000
        // ease-in-out
        // 2xl:pl-40
        // xl:pl-30
        // lg:pl-20
        // md:pl-10
        // text-md
        // @max-md:text-sm
        // mt-10
        // gap-x-4
        // z-98
        // ">
        //     {
        //         Object.values(apps).map((a) => {
        //             return <Card key={a.id} className={`${a.position}`} apptitle={a.title} onClick={() => openApp(`app${a.id}`)} imgsrc={appImages[a.desktopImageSrc]?.default}/>
        //         })
        //     }
        // </div>



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
            mt-20
            ml-10
            pb-20
            gap-8
            z-98
            ">
            {
                Object.values(apps).map((a) => {
                    return <Card key={a.id} className={`${a.position}`} apptitle={a.title} onClick={() => openApp(`app${a.id}`)} imgsrc={appImages[a.desktopImageSrc]?.default}/>
                })
            }
        </HBox>
    )
}

export default Desktop;