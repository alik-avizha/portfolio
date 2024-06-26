import React, { useEffect, useRef } from "react";
import s from "./ProjectPopup.module.scss";
import { motion } from "framer-motion";
import { StackList } from "../stack/StackList";
import { ProjectType } from "../../common/data/projects/projects-data";

type ProjectPopupPropsType = {
    project: ProjectType;
    selectedId: string;
    closePopup: () => void;
    children?: React.ReactNode;
};

export const ProjectPopup = ({ closePopup, selectedId, project, children }: ProjectPopupPropsType) => {
    const popupRef = useRef<HTMLDivElement>(null);
    const overlayHandler = ({ target }: React.MouseEvent<HTMLDivElement>) => {
        if (popupRef.current && !popupRef.current.contains(target as Node)) {
            closePopup();
        }
    };
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Escape") {
            e.preventDefault();
            closePopup();
        }
    };
    useEffect(() => {
        if (popupRef.current) {
            popupRef.current.focus();
        }
    }, [popupRef]);
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={overlayHandler}
                className={s.overlay}
            >
                <motion.div
                    tabIndex={0}
                    onKeyDown={handleKeyDown}
                    ref={popupRef}
                    className={s.popupContent}
                    layoutId={"container" + selectedId}
                >
                    <button className={s.close} onClick={closePopup}>
                        X
                    </button>
                    <motion.h2
                        style={{ color: project.color }}
                        className={s.projectTitle}
                        layoutId={"title" + project.id}
                    >
                        {project.title}
                    </motion.h2>
                    <motion.p layoutId={"description" + project.id} className={s.description}>
                        {project.descriptionLong}
                    </motion.p>
                    <div className={s.infoBlock}>
                        <div className={s.container}>
                            <div>
                                <h5>Type</h5>
                                <p>{project.projectType}</p>
                            </div>
                            <div>
                                <h5>Stack</h5>
                                {project.projectStack.map((t) => (
                                    <p key={t}>{t}</p>
                                ))}
                            </div>
                            <div>
                                <h5>Links</h5>
                                <a target={"_blank"} href={project.githubLink} rel="noreferrer">
                                    Github {project.githubSecondLink && "Main"}
                                </a>
                                {project.githubSecondLink && (
                                    <a target={"_blank"} href={project.githubSecondLink} rel="noreferrer">
                                        Github (Admin)
                                    </a>
                                )}
                                <a target={"_blank"} href={project.deployLink} rel="noreferrer">
                                    Deployment {project.deploySecondLink && "Main"}
                                </a>
                                {project.deploySecondLink && (
                                    <a target={"_blank"} href={project.deploySecondLink} rel="noreferrer">
                                        Deployment (Admin)
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <motion.div layoutId={"cover" + project.id} className={s.imageContainer}>
                        <motion.img
                            layoutId={"image" + project.id}
                            className={s.image}
                            alt={"Social-Network-logo"}
                            src={project.coverLogo}
                        />
                    </motion.div>

                    <motion.h3 className={s.storyBlockTitle}>Purpose & goals</motion.h3>
                    <div className={s.storyBlock}>
                        <div className={s.text}>
                            <p>{project.goals}</p>
                        </div>
                    </div>

                    <motion.h3 style={{ alignSelf: "flex-end" }} className={s.storyBlockTitle}>
                        Web stack
                    </motion.h3>
                    <div className={s.storyBlock}>
                        <div className={s.imageContainer}>
                            <StackList items={project.projectStack} />
                        </div>
                        <div className={s.text}>
                            <p>{project.stack}</p>
                        </div>
                    </div>

                    <motion.h3 className={s.storyBlockTitle}>Problems & process</motion.h3>
                    <div className={s.storyBlock}>
                        <div className={s.text}>
                            <p>{project.problems}</p>
                        </div>
                    </div>

                    <motion.h3 style={{ alignSelf: "flex-end" }} className={s.storyBlockTitle}>
                        Lesson learned
                    </motion.h3>
                    <div className={s.storyBlock}>
                        <div className={s.text}>
                            <p>{project.final}</p>
                        </div>
                    </div>
                    {children}
                </motion.div>
            </motion.div>
        </>
    );
};
