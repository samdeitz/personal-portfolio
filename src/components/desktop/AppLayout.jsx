const vite = {
    technology: "Vite"
}
const tailwind = {
    technology: "TailwindCSS"
}
const svelte = {
    technology: "Svelte"
}
const react = {
    technology: "React.js"
}
const next = {
    technology: "Next.js"
}
const vercel = {
    technology: "Vercel"
}

const workoutFinderApp = [
    {
        type: "HeaderImage"
    },
    {
        type: "Paragraph",
        text: "Details Coming soon..."
    },
    {
        type: "Horizontal Box",
        content: [
            {
                type: "RepoLink"
            },
            {
                type: "Route"
            }
        ]
    },
    {
        type: "Tech Stack",
        content: [
            react,
            vite,
            tailwind,
        ]
    }
];
const rushHourApp = [
    {
        type: "Paragraph",
        text: "Details Coming soon..."
    },
    {
        type: "RepoLink"
    },
];
const dungeonEscapeApp = [
    {
        type: "HeaderImage",
        className: "object-left"
    },
    {
        type: "Paragraph",
        text: "Details Coming soon..."
    },
    {
        type: "RepoLink"
    },
];
const loadingIconApp = [
    {
        type: "Paragraph",
        text: "Details Coming soon..."
    },
    {
        type: "RepoLink"
    }, 
];
const snakeApp = [
    {
        type: "Paragraph",
        text: "Details Coming soon..."
    },
    {
        type: "RepoLink"
    },
];
const pongApp = [
    {
        type: "HeaderImage",
        className: "object-[50%_15%]"
    },
    {
        type: "Paragraph",
        text: "Details Coming soon..."
    },
    {
        type: "RepoLink"
    },
];
const punchInApp = [
    {
        type: "HeaderImage",
        className: ""
    },
    {
        type: "Paragraph",
        text: "Details Coming soon..."
    },
    {
        type: "Horizontal Box",
        content: [
            {
                type: "RepoLink"
            },
            {
                type: "Route"
            }
        ]
    },
    {
        type: "Tech Stack",
        content: [
            svelte,
            vite,
            tailwind
        ]
    }
    
];
const aboutMeApp = [
    {
        type: "HeaderImage",
        className: "object-[50%_20%]"
    },
    // {
    //     type: "Paragraph",
    //     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
    // }
    {
        type: "Paragraph",
        text: "Details Coming soon..."
    }
];
const previousWorkApp = [
    {
        type: "Paragraph",
        text: "Details Coming soon..."
    }
];
const websiteImagesApp = [
    {
        type: "Paragraph",
        text: "Details Coming soon..."
    }
];


export const appLayouts = {
    "Workout Finder": workoutFinderApp,
    "Rush Hour": rushHourApp,
    "Dungeon Escape": dungeonEscapeApp,
    "Loading Icon": loadingIconApp,
    "Snake": snakeApp,
    "Pong": pongApp,
    "Punch-in Page": punchInApp,
    "About Me": aboutMeApp,
    "Previous Work": previousWorkApp,
    "Website Images": websiteImagesApp
}

// {/* --- HEADER --- */}
//                         <HBox className={`
//                             ${isDark ? "bg-dark-grey" : "bg-light-grey"} 
//                             justify-between
//                             rounded-t-lg
//                         `}>

//                             {/* App Title */}
//                             <h1 className="self-center pl-2 font-bold">{currentApp.title}</h1>
                            
//                             {/* Close/Minimize buttons */}
//                             <HBox>
//                                 {notMobile && <img onClick={minimizeApp} src={isDark ? minimizeWhite : minimizeBlack} className="hover-over w-10 h-fit p-2 rounded-lg"/>}
//                                 <img onClick={closeApp} className="w-10 p-2 h-fit hover-over rounded-lg" src={isDark ? closeWhite : closeBlack} />
//                             </HBox>
//                         </HBox>



//                         {/* --- APP CONTENT --- */}
//                         <VBox className={`
//                             ${isDark ? "dark" : "light"}
//                             overflow-auto
//                             scrollbar-style
//                             items-center
//                             h-full
//                             p-4
//                             gap-y-1
//                         `}>
                        
//                             {/* --- PROJECTS --- */}
//                             {currentApp.id < 20 &&
//                                 <VBox className="gap-4">
//                                     <p className="text-center">Coming Soon...</p>
//                                     {/* <img className="max-w-10/12 max-h-4/6 border-2 rounded-lg" src={appImages[currentApp.appImageSrc]?.default} />
//                                     <hr className="w-11/12 my-5" />
                                    
//                                     <p className="w-10/12">Project overview: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                                     <hr className="w-11/12 my-5" />
//                                     <p className="w-10/12">Project Impact: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                                     <hr className="w-11/12 my-5" /> */}

//                                     

//                                 </VBox>
//                             }

                            

//                             {/* --- OTHER (ID = 20 and UP) --- */}
//                             {/* {currentApp.id === 20 && // about me
//                                 <>
//                                     <img className="border-2 rounded-lg" src={imagesByName[`${currentApp.appImageSrc}`]} />
//                                 </>
//                             } */}
                            
                            
//                             {currentApp.id === 21 || currentApp.id === 20 && // previous work
//                                 <>
//                                     <h1 className="">Coming soon...</h1>
//                                 </>
//                             }

//                             {currentApp.id === 22 && // references for images used
//                                 <>
//                                     <h1 className="pt-5">Icons used for this website from <a className="reference-link" href="https://icons8.com/" target="_blank">Icons8</a> </h1>
//                                     <a className="reference-link" target="_blank" href="https://icons8.com/icon/7695/search">Search</a>
//                                     <a className="reference-link" target="_blank" href="https://icons8.com/icon/YRRhCXfA0Vd0/mail">Mail</a>
//                                     <a className="reference-link" target="_blank" href="https://icons8.com/icon/8808/linkedin">LinkedIn</a>
//                                     <a className="reference-link" target="_blank" href="https://icons8.com/icon/62856/github">GitHub</a>
//                                     <a className="reference-link" target="_blank" href="https://icons8.com/icon/5e8ZvPF0Llyj/sun-and-moon">Sun And Moon</a>
//                                     <a className="reference-link" target="_blank" href="https://icons8.com/icon/60664/external-link">Open</a>
//                                     <a className="reference-link" target="_blank" href="https://icons8.com/icon/71200/close">Close</a>
//                                     <a className="reference-link" target="_blank" href="https://icons8.com/icon/WeOgTBKEK9Zc/horizontal-line">Horizontal Line</a>

//                                 </>
//                             }
//                         </VBox>