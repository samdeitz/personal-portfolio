
// id starts at 1 for projects
let projects = {
    "Workout Finder" : {
        id: 1,
        title: "Workout Finder",
        appImageSrc: "exercise-finder-banner.jpg",
        desktopImageSrc: "exercise-finder.jpg",
        route: "/exercisefinder",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/exercisefinder"
    },
    "Rush Hour" : {
        id: 2,
        title: "Rush Hour",
        appImageSrc: "rush-hour-banner.jpg",
        desktopImageSrc: "rush-hour.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/rushhour"
    },
    "Dungeon Escape" : {
        id: 3,
        title: "Dungeon Escape",
        appImageSrc: "escape-banner.jpg",
        desktopImageSrc: "escape.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/riddlegame"
    },
    "Loading Icon" : {
        id: 4,
        title: "Loading Icon",
        appImageSrc: "",
        desktopImageSrc: "loading.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/loadingicon"
    },
    "Snake" : {
        id: 5,
        title: "Snake",
        appImageSrc: "",
        desktopImageSrc: "snake.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/snakegame"
    },
    "Pong" : {
        id: 6,
        title: "Pong",
        appImageSrc: "pong-banner.jpg",
        desktopImageSrc: "pong.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/pong"
    },
    "Punch-in Page" : {
        id: 7,
        title: "Punch-in Page",
        appImageSrc: "punch-in-banner.jpg",
        desktopImageSrc: "punch-in.jpg",
        route: "/md-punch-in",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: "https://github.com/samdeitz/md-punch-in"
    },
}

//id starts at 20 for info
let info = {
    "About Me": {
        id: 20,
        title: "About Me",
        appImageSrc: "family.jpg",
        position: "",
        desktopImageSrc: "abt-me.jpg"
    },
    "Previous Work": {
        id: 21,
        title: "Previous Work",
        appImageSrc: "sample.jpg",
        position: "",
        desktopImageSrc: "test.jpg"
    },
    "Website Images": {
        id: 22,
        title: "Website Images",
        appImageSrc: "sample.jpg",
        position: "",
        desktopImageSrc: "test.jpg"
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