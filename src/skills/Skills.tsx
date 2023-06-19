import React from 'react';
import style from './Skills.module.scss'
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
        <div id='skills' className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={'My skills'}/>
                <div className={style.skills}>
                    <Skill style={js} title={'JS'}/>
                    <Skill style={css} title={'CSS'} />
                    <Skill style={html} title={'HTML'} />
                    <Skill style={react} title={'React'} />
                    <Skill style={redux} title={'Redux'} />
                    <Skill style={ts} title={'Typescript'} />
                    <Skill style={storybook} title={'Storybook'} />
                    <Skill style={unitTests} title={'Unit tests'} />
                    <Skill style={scss} title={'SCSS'} />
                    <Skill style={git} title={'Git'} />
                </div>
            </div>
        </div>
    );
};

