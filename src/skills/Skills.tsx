import React from "react";
import style from "./Skills.module.scss";
import { Skill } from "./skill/Skill";
import { Title } from "../common/components/title/Title";
import { SvgComponent } from "../common/components/svgComponent/SvgComponents";
import { SkillsNameType } from "../common/components/svgSelector/SvgSelector";

type SkillsType = {
    title: string;
    svg: SkillsNameType;
    description: string;
};

export const Skills = () => {
    const skills: SkillsType[] = [
        {
            title: "React",
            svg: `REACT`,
            description: "Hooks, Class components, React-router-dom v6",
        },
        {
            title: "Redux",
            svg: `REDUX`,
            description: "Reducers, Thunks, Store Structure, Redux Toolkit, RTK Query",
        },
        {
            title: "Typescript",
            svg: `TS`,
            description: "Primitive types, Objects, Generics, Union types",
        },
        {
            title: "JS",
            svg: `JS`,
            description: "Promises, Eventloop, this, Closures, Recursion, Prototypes, Scope",
        },
        {
            title: "Storybook",
            svg: `STORYBOOK`,
            description: "Decorators, Addons, Stories",
        },
        {
            title: "Unit tests",
            svg: `TEST`,
            description: "TDD, Jest unit/snapshot integration testing",
        },
        {
            title: "SCSS",
            svg: `SCSS`,
            description: "Mixins, variables",
        },
        {
            title: "HTML",
            svg: `HTML`,
            description: "Semantics, Layout, Styling, Responsive",
        },
        {
            title: "CSS",
            svg: `CSS`,
            description: "Responsive & adaptive design. Flexbox, grid, positioning",
        },
        {
            title: "Git",
            svg: `GIT`,
            description: "Semantic commits, all basic operations & resolving merge conflicts",
        },
    ];

    return (
        <div id="skills" className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={"My skills"} />
                <div className={style.skills}>
                    {skills.map((item, index) => {
                        return <Skill key={index} style={item.svg} title={item.title} description={item.description} />;
                    })}
                </div>
            </div>
            <SvgComponent fill={"2a2a2a"} />
        </div>
    );
};
