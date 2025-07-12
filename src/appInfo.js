

let projects = {
    proj2 : {
        id: 2,
        title: "Workout Finder",
        projectImageSrc: "../assets/sample.jpg",
        position: "",
        desktopImageSrc: "../assets/test.jpg"
    },
    proj3 : {
        id: 3,
        title: "Workout Tracker",
        projectImageSrc: "../assets/sample.jpg",
        position: "",
        desktopImageSrc: "../assets/test.jpg"
    },
    proj4 : {
        id: 4,
        title: "Stock Market Tracker",
        projectImageSrc: "../assets/sample.jpg",
        position: "",
        desktopImageSrc: "../assets/test.jpg"
    },
    proj5 : {
        id: 5,
        title: "Price Comparer",
        projectImageSrc: "../assets/sample.jpg",
        position: "",
        desktopImageSrc: "../assets/test.jpg"
    },
    
}

let info = {
    proj1: {
        id: 1,
        title: "About Me",
        projectImageSrc: "../assets/sample.jpg",
        position: "",
        desktopImageSrc: "../assets/test.jpg"
    },
}

let col, row = 1;

for (let app of Object.values(projects)) {
    
    app.position = `col-start-${col} row-start-${row}`;
    if(row === 4) col++, row = 1;
    row++;
}

col = 5
row = 1

for (let app of Object.values(info)) {
    app.position = `col-start-${col} row-start-${row}`
    if (row === 4) col--, row = 1;
    row++;
}

const apps = {
   ...info,
   ...projects
}

export default apps;