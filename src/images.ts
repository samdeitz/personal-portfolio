
// import all App jpgs for dynamic use
const appImages = import.meta.glob("./assets/*.jpg", {eager: true}); 
export default appImages;