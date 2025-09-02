
// id starts at 1 for projects
let projects = {
    app1 : {
        id: 1,
        title: "Workout Finder",
        appImageSrc: "../assets/exercise-finder.jpg",
        desktopImageSrc: "../assets/exercise-finder.jpg",
        position: "",
        appOverview: "",
        appImpact: "",
        repoLink: ""
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