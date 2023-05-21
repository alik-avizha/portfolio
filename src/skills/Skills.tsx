import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import reactIcon from '../assets/image/react_icon_196203.svg';
import reduxIcon from '../assets/image/reduxIcon.svg';
import tsIcon from '../assets/image/typescript_icon_131914.svg';

export const Skills = () => {

    const react = {
        backgroundImage: `url(${reactIcon})`,
    };
    const redux = {
        backgroundImage: `url(${reduxIcon})`,
    };

    const ts = {
        backgroundImage: `url(${tsIcon})`,
    };


    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'My skills'}/>
                <div className={style.skills}>
                    <Skill style={react} title={'JS'} description={'Поддробное описание навыка'}/>
                    <Skill style={react} title={'CSS'} description={'Поддробное описание навыка'}/>
                    <Skill style={react} title={'HTML'} description={'Поддробное описание навыка'}/>
                    <Skill style={react} title={'React'} description={'Поддробное описание навыка'}/>
                    <Skill style={redux} title={'Redux'} description={'Поддробное описание навыка'}/>
                    <Skill style={ts} title={'Typescript'} description={'Поддробное описание навыка'}/>
                </div>
            </div>
        </div>
    );
};
