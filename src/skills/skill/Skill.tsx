import React from "react";
import style from "./Skill.module.scss";
import { LinksNameType, SkillsNameType, SvgSelector } from "../../common/components/svgSelector/SvgSelector";

type SkillPropsType = {
    title: string;
    description: string;
    style: SkillsNameType | LinksNameType;
};

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill}>
            <div className={style.box}>
                <div className={style.icon}>
                    <SvgSelector svgName={props.style} />
                </div>
                <div className={style.circle}></div>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};
