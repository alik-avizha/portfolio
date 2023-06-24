import React from "react";
import style from "./Project.module.scss";

type ProjectPropsType = {
    title: string;
    description: string;
    style: {
        backgroundImage: string;
    };
    ghPages: string;
    url: string;
};

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.imgWrapper}>
                <a
                    href={`${props.ghPages}`}
                    className={style.logo}
                    style={props.style}
                    target="_blank"
                    rel="noreferrer"
                ></a>
            </div>
            <div className={style.description}>
                <a href={props.url} className={style.name} target="_blank" rel="noreferrer">
                    {props.title}
                </a>
                <span className={style.category}>{props.description}</span>
            </div>
        </div>
    );
};
