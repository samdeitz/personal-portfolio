
// id starts at 1 for projects
let projects = {
    app1 : {
        id: 1,
        title: "Workout Finder",
        appImageSrc: "",
        desktopImageSrc: "../assets/exercise-finder.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/exercisefinder"
    },
    app2 : {
        id: 2,
        title: "Rush Hour",
        appImageSrc: "",
        desktopImageSrc: "../assets/rush-hour.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/rushhour"
    },
    app3 : {
        id: 3,
        title: "Escape The Dungeon",
        appImageSrc: "",
        desktopImageSrc: "../assets/door.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/riddlegame"
    },
    app4 : {
        id: 4,
        title: "Loading Icon",
        appImageSrc: "",
        desktopImageSrc: "../assets/loading.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/loadingicon"
    },
    app5 : {
        id: 5,
        title: "Snake",
        appImageSrc: "",
        desktopImageSrc: "../assets/snake.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/snakegame"
    },
    app6 : {
        id: 6,
        title: "Pong",
        appImageSrc: "",
        desktopImageSrc: "../assets/pong.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/pong"
    },
}

//id starts at 20 for info
let info = {
    app20: {
        id: 20,
        title: "About Me",
        appImageSrc: "../assets/family.jpg",
        position: "",
        desktopImageSrc: "../assets/abt-me.jpg"
    },
    app21: {
        id: 21,
        title: "Previous Work",
        appImageSrc: "../assets/sample.jpg",
        position: "",
        desktopImageSrc: "../assets/test.jpg"
    },
    app22: {
        id: 22,
        title: "Website Images",
        appImageSrc: "../assets/sample.jpg",
        position: "",
        desktopImageSrc: "../assets/test.jpg"
    }
}

let col = 1, row = 1;

for (let app of Object.values(projects)) {
    
    app.position = `col-start-${col} row-start-${row}`;
    if(row === 3) col++, row = 0;
    row++;
}

col = 3
row = 1

for (let app of Object.values(info)) {
    app.position = `col-start-${col} row-start-${row}`
    if (row === 3) col--, row = 0;
    row++;
}

const apps = {
   ...projects,
   ...info
}

export default apps;