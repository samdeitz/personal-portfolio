import VBox from "@/components/ui/VBox.jsx";
import HBox from "@/components/ui/HBox.jsx";
import { useApp } from "@/context/appContext.js"
import { useTheme } from "@/context/themeContext.js"

// import app icons for results tab
const appImages = import.meta.glob("@/assets/icons/appIcons/*.jpg", {
    eager: true,
    import: "default"
});

// change keys to image name
const imagesByName = Object.fromEntries(
  Object.entries(appImages).map(([path, url]) => [path.split("/").pop(), url])
);


const SearchResults = ({ apps, isSearching, setIsSearching, searchValue }) => {
    const { openApp } = useApp();
    const { isDark } = useTheme();

    return (
        <VBox className={`
                fixed
                bottom-13
                z-98
                min-w-60.25
                sm:min-w-64 
                md:min-w-74 
                lg:min-w-94
                transition-all
                duration-500
                ease-in-out
                origin-bottom-left
                overflow-auto
                scrollbar-style
                ${isDark ? "dark" : "light"}
                ${isDark ? "bg-light-grey" : "bg-dark-grey"}
                ${isDark ? "text-[#151515]" : "text-[#d9d9d9]"}
                ${isSearching ? "max-h-55 opacity-100 scale-100" : "max-h-0 opacity-0 scale-0"}
            `}>

                {/* Current viewable apps that match search value */}
                {Object.values(apps).map((a) => {
                    if(a.title.toLowerCase().includes(searchValue)) {
                        return (

                            // app to show
                            <HBox 
                                className="py-2 pl-4 gap-4 cursor-pointer hover-over duration-500 items-center" 
                                key={a.id} 
                                onClick={() => {
                                    setIsSearching(false); 
                                    openApp(a);
                                }}
                            >
                                <img className="h-7 rounded-lg" src={imagesByName[a.desktopImageSrc]} alt="desktop image"/>
                                <h1 className="" >{a.title}</h1>
                            </HBox>
                        )
                    }
                })}
        </VBox>
    )
}

export default SearchResults;