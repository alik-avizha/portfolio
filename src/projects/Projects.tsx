import React from "react";
import style from "./Projects.module.scss";
import { Title } from "../common/components/title/Title";
import socialNetworkImage from "../assets/image/socialNetwork.png";
import todoImage from "../assets/image/todolist.png";
import { SvgComponent } from "../common/components/SvgComponent/SvgComponents";
import myMoney from "../assets/image/MyMoney.jpg";
import cards from "../assets/image/cards.png";
import { Project } from "./Project/Project";

export const Projects = () => {
    const projects = [
        {
            name: "Social network",
            description: "Flux patterns | React | Redux | TS | HOCs | Class and Function components",
            ghPages: "https://alik-avizha.github.io/my_social_network",
            url: "https://github.com/alik-avizha/my_social_network",
            projectStyle: { backgroundImage: `url(${socialNetworkImage})` },
        },
        {
            name: "Cards",
            description: "TypeScript | React | RTK Query | Storybook | React-Hook-Form | Axios | Radix",
            ghPages: "https://learning-cards-97i1crhuy-alik-avizha.vercel.app/",
            url: "https://github.com/alik-avizha/Learning-Cards",
            projectStyle: { backgroundImage: `url(${cards})` },
        },
        {
            name: "Todo list",
            description:
                "SPA – React | Redux-Toolkit | TS |  Storybook |  Hooks | HOCs |  REST API | Axios | Unit and Integration tests",
            ghPages: "https://alik-avizha.github.io/Happy-Life-Checklist",
            url: "https://github.com/alik-avizha/Happy-Life-Checklist",
            projectStyle: { backgroundImage: `url(${todoImage})` },
        },
        {
            name: "My money",
            description: "TypeScript | React | Redux Toolkit | React-Router-Dom | Styled-components | Chart.js",
            ghPages: "Тут будет ссылка",
            url: "https://github.com/shinkar94/myMoney2",
            projectStyle: { backgroundImage: `url(${myMoney})` },
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
