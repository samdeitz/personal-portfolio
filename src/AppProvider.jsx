import { useState, useMemo } from 'react';
import { useMediaQuery } from "react-responsive";
import { AppContext } from "./AppContext.js";


export const AppProvider = ( { children } ) => {
    const [app, setApp] = useState("");
    const [openApps, setOpenApps] = useState([])
    const isDesktop = useMediaQuery({ minWidth: 600 })

    const openApp = (a) => {
        if(!(typeof a === "string")) a = `app${a.id}`;
        setApp(a);

        if(!openApps.includes(a) && isDesktop) {
            setOpenApps([
                ...openApps,
                a
            ]);
        }
    }

    // implement useMemo to avoid updating all states when one state changes
    const appValue = useMemo(() => ({
        app,
        setApp,
        openApps,
        setOpenApps,
        openApp
    }), [app, openApps])

    return (
        <AppContext.Provider value={appValue}>
            {children}
        </AppContext.Provider>
    )
}
