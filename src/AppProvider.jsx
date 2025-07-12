import { useState, useMemo } from 'react';
import { AppContext } from "./AppContext.js";


export const AppProvider = ( { children } ) => {
    const [app, setApp] = useState("");
    const [openApps, setOpenApps] = useState([])

    // implement useMemo to avoid updating all states when one state changes
    const appValue = useMemo(() => ({
        app,
        setApp,
        openApps,
        setOpenApps
    }), [app, openApps])

    return (
        <AppContext.Provider value={appValue}>
            {children}
        </AppContext.Provider>
    )
}
