import { useState, useMemo } from 'react';
import { AppContext } from "./AppContext.js";


export const AppProvider = ( { children } ) => {
    const [app, setApp] = useState("");
    const [openApps, setOpenApps] = useState([])

    const openApp = (a) => {
        if(!(typeof a === "string")) a = `proj${a.id}`;
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
