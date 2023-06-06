import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import {Title} from '../common/components/title/Title';
import reactIcon from '../assets/image/react_icon_196203.svg';
import reduxIcon from '../assets/image/reduxIcon.svg';
import tsIcon from '../assets/image/typescript_icon_131914.svg';
import jsIcon from '../assets/image/java_script_icon_244958.svg';
import cssIcon from '../assets/image/css.svg';
import htmlIcon from '../assets/image/html.svg';
import sbIcon from '../assets/image/storybook-svgrepo-com.svg';
import utIcon from '../assets/image/test-svgrepo-com.svg';
import scssIcon from '../assets/image/sass-svgrepo-com.svg';
import gitIcon from '../assets/image/git.svg';

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
    const js = {
        backgroundImage: `url(${jsIcon})`,
    };
    const css = {
        backgroundImage: `url(${cssIcon})`,
    };
    const html = {
        backgroundImage: `url(${htmlIcon})`,
    };
    const storybook = {
        backgroundImage: `url(${sbIcon})`,
    };
    const unitTests = {
        backgroundImage: `url(${utIcon})`,
    };
    const scss = {
        backgroundImage: `url(${scssIcon})`,
    };
    const git = {
        backgroundImage: `url(${gitIcon})`,
    };

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'My skills'}/>
                <div className={style.skills}>
                    <Skill style={js} title={'JS'} description={'Поддробное описание навыка'}/>
                    <Skill style={css} title={'CSS'} description={'Поддробное описание навыка'}/>
                    <Skill style={html} title={'HTML'} description={'Поддробное описание навыка'}/>
                    <Skill style={react} title={'React'} description={'Поддробное описание навыка'}/>
                    <Skill style={redux} title={'Redux'} description={'Поддробное описание навыка'}/>
                    <Skill style={ts} title={'Typescript'} description={'Поддробное описание навыка'}/>
                    <Skill style={storybook} title={'Storybook'} description={'Поддробное описание навыка'}/>
                    <Skill style={unitTests} title={'Unit tests'} description={'Поддробное описание навыка'}/>
                    <Skill style={scss} title={'SCSS'} description={'Поддробное описание навыка'}/>
                    <Skill style={git} title={'Git'} description={'Поддробное описание навыка'}/>
                </div>
            </div>
        </div>
    );
};

