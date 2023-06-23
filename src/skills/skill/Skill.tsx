import React from 'react';
import style from './Skill.module.scss'

type SkillPropsType = {
    title: string
    description: string
    style?: {
        backgroundImage: string
    }
}

export const Skill = (props: SkillPropsType) => {

    return (
        <div className={style.skill}>
            <div className={style.box}>
                <div className={style.icon} style={props.style}></div>
                <div className={style.circle}></div>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>
                {props.description}
            </span>
        </div>
    );
};
