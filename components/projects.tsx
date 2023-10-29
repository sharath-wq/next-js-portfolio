import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

const Projects = () => {
    return (
        <section>
            <SectionHeading text="my projects" />
            <div className="">
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project key={index} {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
};

export default Projects;
