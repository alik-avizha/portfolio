import React from "react";
import style from "./Projects.module.scss";
import { Project } from "./Project/Project";
import { Title } from "../common/components/title/Title";
import socialNetworkImage from "../assets/image/socialNetwork.png";
import todoImage from "../assets/image/todoList.jpeg";
import { SvgComponent } from "../common/components/SvgComponent/SvgComponents";

export const Projects = () => {
    const projects = [
        {
            name: "Social network",
            description: "Flux patterns; React/Redux/TS, Class and Func components",
            ghPages: "https://alik-avizha.github.io/my_social_network",
            url: "https://github.com/alik-avizha/my_social_network",
            projectStyle: { backgroundImage: `url(${socialNetworkImage})` },
        },
        {
            name: "Todo list",
            description:
                "SPA – React/Redux-toolkit/TS. Storybook, hooks, HOCs, REST API, axios. Unit, integration tests",
            ghPages: "Тут будет ссылка",
            url: "https://github.com/alik-avizha/Happy-Life-Checklist",
            projectStyle: { backgroundImage: `url(${todoImage})` },
        },
    ];

    return (
        <div id="projects" className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text={"My Projects"} />
                <div className={style.projects}>
                    {projects.map((el, index) => {
                        return (
                            <Project
                                key={index}
                                style={el.projectStyle}
                                title={el.name}
                                description={el.description}
                                ghPages={el.ghPages}
                                url={el.url}
                            />
                        );
                    })}
                </div>
            </div>
            <SvgComponent fill={"202020FF"} />
        </div>
    );
};
