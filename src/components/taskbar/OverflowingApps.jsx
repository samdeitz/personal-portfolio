
import { useApp } from "@/context/AppContext.js";
import { useTheme } from "@/context/ThemeContext.js";
import HBox from "@/components/ui/HBox.jsx";


const OverflowingApps = ({ nonDisplayableOpenApps, appImages, apps, showApps, setShowApps }) => {
    const { isDark } = useTheme(); // theme context
    const { openApp } = useApp(); // app context to open an app

    return (
        <HBox className={`
            fixed
            bottom-13
            z-98
            transition-all
            duration-500
            ease-in-out
            origin-bottom-left
            ${showApps ? "flex-wrap max-w-57 opacity-100 scale-100" : "max-w-0 opacity-0 scale-0"}
            ${isDark ? "bg-light-grey" : "bg-dark-grey"}
        `}>
                {/* Render apps unable to fit on taskbar in overflow menu */}
                {nonDisplayableOpenApps.map((a) =>
                    <div className="taskbar-item" 
                        key={a} 
                        onClick={() => {
                            setShowApps(false);
                            openApp(a)
                        }}
                    >
                        <img className="rounded-lg" src={appImages[apps[a].desktopImageSrc]} />
                    </div>
                )}
            
        </HBox>
    )
}

export default OverflowingApps;