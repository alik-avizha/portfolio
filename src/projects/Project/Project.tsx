import React from "react";
import s from "./Poject.module.scss";
import { motion } from "framer-motion";
import { ProjectType } from "../../common/data/projects/projects-data";
import { Fade } from "react-awesome-reveal";

export type ProjectPropsType = {
    handleOpen: (id: string) => void;
    project: ProjectType;
    index: number;
};

export const Project = ({ project, handleOpen }: ProjectPropsType) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter" || e.code === "Space") {
            e.preventDefault();
            handleOpen(project.id);
        }
    };
    return (
        <Fade direction={"up"} delay={300} triggerOnce={true}>
            <motion.div
                tabIndex={0}
                whileHover={{
                    scale: 1.005,
                    transition: { duration: 0.15 },
                    boxShadow: `0 0px 12px ${project.color}`,
                }}
                className={s.project}
                layoutId={"container" + project.id}
                key={project.id}
                onClick={() => handleOpen(project.id)}
                onKeyDown={handleKeyDown}
            >
                <motion.h3 layoutId={"title" + project.id} className={s.title}>
                    {project.title}
                </motion.h3>
                <motion.div layoutId={"cover" + project.id} className={s.logoWrapper}>
                    <motion.img layoutId={"image" + project.id} alt={project.title} src={project.coverLogo} />
                </motion.div>
                <motion.p layoutId={"description" + project.id} className={s.description}>
                    {project.descriptionShort}
                </motion.p>
                <p className={s.showMore}>LEARN MORE</p>
            </motion.div>
        </Fade>
    );
};
