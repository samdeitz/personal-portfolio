import Card from "./Card.jsx";
import apps from "../appInfo.js";
import { useApp } from "../AppContext.js";

const appImages = import.meta.glob("../assets/*.jpg", {eager: true});


const Desktop = () => {
    const { openApp } = useApp();

    return (
        <div className="
        grid
        grid-cols-5
        grid-rows-3
        w-full
        2xl:pl-40
        xl:pl-30
        lg:pl-20
        md:pl-10
        mt-10
        gap-x-4
        ">
            {
                Object.values(apps).map((a) => {
                    return <Card key={a.id} className={a.position} apptitle={a.title} onClick={() => openApp(`proj${a.id}`)} imgsrc={appImages[`${a.desktopImageSrc}`]?.default}/>
                })
            }
        </div>
    )
}

export default Desktop;