import React from "react";
import style from "./Skills.module.scss";
import { Skill } from "./skill/Skill";
import { Title } from "../common/components/title/Title";
import { SvgComponent } from "../common/components/svgComponent/SvgComponents";
import { skills } from "../common/data/skills/skills";

export const Skills = () => {
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
