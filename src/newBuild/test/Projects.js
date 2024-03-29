import React from "react";
import { useNavigate } from "react-router-dom"

const Projects = () => {

    let nav = useNavigate();

    return (
      <>
            <div>These r my projects</div>
            <div>
                <button onClick={() => {nav("/")}}>Go to Home &rarr;</button>
            </div>
      </>
    );
}

export default Projects;