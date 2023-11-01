"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} className="scroll-mt-28 mt-28 sm:mt-0" id="projects">
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
