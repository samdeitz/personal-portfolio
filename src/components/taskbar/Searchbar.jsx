import { useTheme } from "@/ThemeProvider.jsx";
import HBox from "@/components/ui/HBox.jsx";


const Searchbar = ({ searchImg, searchValue, setSearchValue, setOpenResults, isSearching, setIsSearching }) => {
    const { isDark } = useTheme();

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchClick = () => {
        setIsSearching(!isSearching);
        setOpenResults(prev => !prev);

        setTimeout(() => {
            setSearchValue("");
        }, 300)
    }

    return (
        <HBox className={`
                gap-1 
                items-center 
                origin-left
                transition-all
                duration-500
                ease-in-out
                flex-shrink-0
                ${isSearching ? "min-w-54 sm:min-w-64 md:min-w-74 lg:min-w-94" : "min-w-0"}
                ${isSearching ? (!isDark ? "bg-dark-grey" : "bg-light-grey") : (!isDark ? "bg-light-grey" : "bg-dark-grey")}
                `}>
            <div className="taskbar-item">
                <img onClick={handleSearchClick} src={searchImg} alt="search" />
            </div>
            <input 
            className={`
            transition-all
            duration-500
            ease-in-out
            origin-left
            ${isSearching ? "max-w-40 opacity-100" : "max-w-0 opacity-0"} 
            ${isDark ? "text-[#151515]" : "text-[#d9d9d9]"}
            h-12
            rounded-sm 
            pl-2 
            outline-none
            `} 
            placeholder="Search" type="text" value={searchValue} onChange={handleInputChange}
            />
        </HBox>
    )
}


export default Searchbar;

