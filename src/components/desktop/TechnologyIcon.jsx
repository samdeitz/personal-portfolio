import viteLogo from "@/assets/icons/vite-logo.svg";
import tailwindLogo from "@/assets/icons/tailwind-logo.svg";
import svelteLogo from "@/assets/icons/svelte-logo.svg";
import reactLogo from "@/assets/icons/react-logo.svg";

const TechnologyIcon = ({ technology }) => {

    const getIcon = () => {
        switch (technology) {
            case "Vite":
                return <img className="w-5" src={viteLogo} alt="vite" />
            case "TailwindCSS":
                return <img className="w-5" src={tailwindLogo} alt="tailwind logo" />
            case "React.js":
                return <img className="w-5" src={reactLogo} alt="react logo" />
            case "Svelte":
                return <img className="w-5" src={svelteLogo} alt="svelte logo" />
            case "Next.js":
                return <img className="w-5" src={viteLogo} alt="next logo" />
            case "Vercel":
                return <img className="w-5" src={viteLogo} alt="vercel logo" />
        }


        
    }


    return (
        <div className="group block perspective-[1000px] cursor-default w-max">
            <div className="relative transition-transform duration-400 transform-3d group-hover:rotate-y-180">

                {/* front */}
                <div className="relative w-full h-full p-2 flex items-center justify-center backface-hidden pointer-events-none border rounded-xl">
                    <p>{technology}</p>
                </div>

                {/* back */}
                <div className="absolute top-0 left-0 w-full h-full p-2 flex items-center justify-center backface-hidden rotate-y-180 pointer-events-none bg-blue-100 border rounded-xl">
                    {getIcon()}
                </div>

            </div>
        </div>   
    );
}

export default TechnologyIcon;