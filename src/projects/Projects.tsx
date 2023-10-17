import React, { useState } from "react";
import style from "./Projects.module.scss";
import { Title } from "../common/components/title/Title";
import { SvgComponent } from "../common/components/svgComponent/SvgComponents";
import { setDocumentScroll } from "../common/utils/set-document-scroll";
import { AnimatePresence } from "framer-motion";
import { ProjectPopup } from "./project-popup/ProjectPopup";
import { Project } from "./Project/Project";
import { projects } from "../common/data/projects/projects-data";

export const Projects = () => {
    const [selectedId, setSelectedId] = useState<string>("");
    const handleOpenPopup = (id: string) => {
        setDocumentScroll(false);
        setSelectedId(id);
    };
    const handleClosePopup = () => {
        setDocumentScroll(true);
        setSelectedId("");
    };
    const item = projects.find((item) => item.id === selectedId) || projects[0];

    return (
        <div id="projects" className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text={"My Projects"} />
                <div className={style.projects}>
                    {projects.map((item, index) => (
                        <Project index={index} key={item.id} handleOpen={handleOpenPopup} project={item} />
                    ))}
                    <AnimatePresence>
                        {selectedId && (
                            <ProjectPopup project={item} selectedId={selectedId} closePopup={handleClosePopup} />
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <SvgComponent fill={"202020FF"} />
        </div>
    );
};
