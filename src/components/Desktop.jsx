import { useEffect, useRef } from 'react';
import Card from "./Card.jsx";
import TestImage from "../assets/test.jpg";
import { useProject } from "../ProjectProvider.jsx";

const Desktop = () => {
    const { setProject } = useProject();

    const renderProject = (proj) => {
       setProject(proj);
    }


    return (
        <div className="
        grid
        grid-cols-6
        grid-rows-3
        px-5
        mt-10
        max-h-[80vw]
        ">
            <Card onClick={() => renderProject("proj1")} className="col-start-2" imgsrc={TestImage} />
            <Card onClick={() => renderProject("proj2")} className="col-start-4 row-start-2" imgsrc={TestImage} />
            <Card onClick={() => renderProject("proj3")} className="col-start-1 row-start-3" imgsrc={TestImage} />
            <Card onClick={() => renderProject("proj4")} className="col-start-6 row-start-2" imgsrc={TestImage} />
            <Card onClick={() => renderProject("proj5")} className="col-start-5 row-start-3" imgsrc={TestImage} />
        </div>
    )
}

export default Desktop;