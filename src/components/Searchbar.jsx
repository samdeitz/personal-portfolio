import { useTheme } from "../ThemeProvider.jsx";
import HBox from "./HBox.jsx";


const Searchbar = ({ searchImg, searchValue, setSearchValue, setOpenResults, isSearching, setIsSearching }) => {
    const { isDark } = useTheme();

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleSearchClick = (e) => {
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
                ${isSearching ? "min-w-54 sm:min-w-94" : "min-w-0"}
                ${isSearching ? (!isDark ? "bg-dark-grey" : "bg-light-grey") : (!isDark ? "bg-light-grey" : "bg-dark-grey")}
                `}>
            <img onClick={handleSearchClick} className="taskbar-item" src={searchImg} alt="search" />
            <input 
            className={`
            transition-all
            duration-500
            ease-in-out
            origin-left
            ${isSearching ? "max-w-40 min-w-40 sm:min-w-80 opacity-100" : "min-w-0 max-w-0 opacity-0 "} 
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

