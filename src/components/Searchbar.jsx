import { useState } from 'react';
import { useTheme } from "../ThemeProvider.jsx";
import HBox from "./HBox.jsx";


const Searchbar = ({ searchImg, searchValue, setSearchValue, setOpenResults }) => {
    const { isDark } = useTheme();
    const [isSearching, setIsSearching] = useState(false);

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
        <HBox className="gap-1 items-center">
            <img onClick={handleSearchClick} className="taskbar-item" src={searchImg} alt="search" />
            <input 
            className={`
            transition-all
            duration-500
            ease-in-out
            origin-left
            ${isSearching ? "max-w-[25vw] opacity-100 scale-x-100" : "max-w-0 opacity-0 scale-x-0"} 
            ${isDark ? "bg-light-grey" : "bg-dark-grey"}
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

