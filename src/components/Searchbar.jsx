import { useState } from 'react';
import HBox from "./HBox.jsx";
import { useTheme } from "../ThemeProvider.jsx";


const Searchbar = ({ searchImg }) => {
    const { isDark } = useTheme();
    const [isSearching, setIsSearching] = useState(false);

    const handleClick = (e) => {
        setIsSearching(!isSearching);
    }

    return (
        <HBox className="gap-1 items-center">
            <img onClick={handleClick} className="taskbar-item" src={searchImg} alt="search" />
            <input 
            className={`
            ${isSearching ? "w-30 visible" : "w-0 invisible"} 
            ${isDark ? "bg-[#999999]" : "bg-[#333333]"}
            ${isDark ? "text-[#151515]" : "text-[#d9d9d9]"}
            h-10
            rounded-sm 
            pl-2 
            searchbar-transition
            outline-none
            `} 
            placeholder="Search" type="text"
            />
        </HBox>
    )
}


export default Searchbar;

