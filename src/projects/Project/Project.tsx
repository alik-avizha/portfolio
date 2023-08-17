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
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.category}>{props.description}</span>
                <div className={style.links}>
                    <a href={props.ghPages} target="_blank" rel="noreferrer">
                        DEMO
                    </a>
                    <a href={props.url} target="_blank" rel="noreferrer">
                        CODE
                    </a>
                </div>
            </div>
        </div>
    );
};
