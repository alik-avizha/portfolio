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
import {SvgComponent} from '../common/components/SvgComponent/SvgComponents';

export const Skills = () => {

    const skills = [
        {title: 'React', style: {backgroundImage: `url(${reactIcon})`},description: 'Hooks, Class components, React-router-dom v6'},
        {title: 'Redux', style: {backgroundImage: `url(${reduxIcon})`},description: 'Reducers, Thunks, Store Structure, Redux Toolkit'},
        {title: 'Typescript', style: {backgroundImage: `url(${tsIcon})`},description: 'Primitive types, Objects, Generics, Union types'},
        {title: 'JS', style: {backgroundImage: `url(${jsIcon})`}, description: 'Promises, Eventloop, this, Closures, Recursion, Prototypes, Scope'},
        {title: 'Storybook', style: {backgroundImage: `url(${sbIcon})`},description: 'Decorators, Addons, Stories'},
        {title: 'Unit tests', style: {backgroundImage: `url(${utIcon})`},description: 'TDD, Jest unit/snapshot integration testing'},
        {title: 'SCSS', style: {backgroundImage: `url(${scssIcon})`},description: 'Responsive & adaptive design. Flexbox, grid, positioning'},
        {title: 'HTML', style: {backgroundImage: `url(${htmlIcon})`},description: 'Semantics, Layout, Styling, Responsive'},
        {title: 'CSS', style: {backgroundImage: `url(${cssIcon})`},description: 'Responsive & adaptive design. Flexbox, grid, positioning'},
        {title: 'Git', style: {backgroundImage: `url(${gitIcon})`},description: 'Semantic commits, all basic operations & resolving merge conflicts'},
    ]

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={style.skillsContainer}>
                <Title text={'My skills'}/>
                <div className={style.skills}>
                    {skills.map((item, index) => {
                        return (
                            <Skill key={index} style={item.style} title={item.title} description={item.description}/>
                        )
                    })}
                </div>
            </div>
            <SvgComponent fill={'2a2a2a'}/>
        </div>
    );
};

