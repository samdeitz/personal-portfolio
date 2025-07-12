import Card from "./Card.jsx";
import { useApp } from "../AppContext.js";
import apps from "../appInfo.js";

const appImages = import.meta.glob("../assets/*.jpg", {eager: true});


const Desktop = () => {
    const { app, setApp, openApps, setOpenApps } = useApp();

    const handleAppClick = (a) => {

        setApp(a);
        if(!openApps.includes(a)) {
            setOpenApps([
                ...openApps,
                a
            ]);
        }
    }

    return (
        <div className="
        grid
        grid-cols-5
        grid-rows-3
        
        mt-10
        ">
            {
                Object.values(apps).map((a) => {
                    return <Card key={a.id} className={a.position} apptitle={a.title} onClick={() => handleAppClick(`proj${a.id}`)} imgsrc={appImages[`${a.desktopImageSrc}`]?.default}/>
                })
            }
        </div>
    )
}

export default Desktop;