import { useState } from 'react';
import HBox from "./HBox.jsx";
import { useTheme } from "../ThemeProvider.jsx";


const Searchbar = ({ searchImg, searchValue, setSearchValue }) => {
    const { isDark } = useTheme();
    const [isSearching, setIsSearching] = useState(false);

    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleClick = (e) => {
        setIsSearching(!isSearching);
    }

    return (
        <HBox className="gap-1 items-center">
            <img onClick={handleClick} className="taskbar-item" src={searchImg} alt="search" />
            <input 
            className={`
            transition-all
            duration-500
            ease-in-out
            origin-left
            ${isSearching ? "max-w-30 opacity-100 scale-x-100" : "max-w-0 opacity-0 scale-x-0"} 
            ${isDark ? "bg-[#999999]" : "bg-[#333333]"}
            ${isDark ? "text-[#151515]" : "text-[#d9d9d9]"}
            h-12
            rounded-sm 
            pl-2 
            outline-none
            `} 
            placeholder="Search" type="text" value={searchValue} onChange={handleChange}
            />
        </HBox>
    )
}


export default Searchbar;

