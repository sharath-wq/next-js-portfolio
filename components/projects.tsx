"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
    });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection("Projects");
        }
    }, [inView, setActiveSection, timeOfLastClick]);
    return (
        <section ref={ref} className="scroll-mt-28" id="projects">
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
