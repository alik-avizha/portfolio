import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'My skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Поддробное описание навыка'}/>
                    <Skill title={'CSS'} description={'Поддробное описание навыка'}/>
                    <Skill title={'HTML'} description={'Поддробное описание навыка'}/>
                </div>
            </div>
        </div>
    );
};
