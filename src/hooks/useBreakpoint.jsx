
import { useState, useEffect } from "react";


export const useBreakpoint = () => {
    const [breakpoint, setBreakpoint] = useState(null);
    const [taskbarAppMax, setTaskbarAppMax] = useState(null);

    useEffect(() => {
        const calcBreakpoint = () => {
            const w = window.innerWidth;
            if (w > 790) {
                setBreakpoint(null);
                setTaskbarAppMax(null);
            }
            if (w <= 790) {
                setBreakpoint(790);
                setTaskbarAppMax(4);
            }
            if (w <= 700) {
                setBreakpoint(700);
                setTaskbarAppMax(3);
            }
            if (w <= 680) {
                setBreakpoint(680);
                setTaskbarAppMax(2);
            }
        }

        calcBreakpoint();
        window.addEventListener("resize", calcBreakpoint);
        return () => window.removeEventListener("resize", calcBreakpoint);
    }, [])

    return { breakpoint, appAmount: taskbarAppMax }
}
