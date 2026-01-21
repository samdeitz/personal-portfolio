import { useState, useMemo } from 'react';
import { AppContext } from "./AppContext.js";


export const AppProvider = ( { children } ) => {
    const [app, setApp] = useState(""); // Current open app
    const [openApps, setOpenApps] = useState([]) // List of apps running in the background (taskbar)

    const openApp = (a) => {
        if(!(typeof a === "string")) a = a.title;
        setApp(a);

        if(!openApps.includes(a)) {
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
