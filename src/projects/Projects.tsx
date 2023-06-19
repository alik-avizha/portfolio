import React from 'react';
import style from './Projects.module.scss'
import {Project} from './Project/Project';
import {Title} from '../common/components/title/Title';
import socialNetworkImage from '../assets/image/socialNetwork.png';
import todoImage from '../assets/image/todoList.jpeg';


export const Projects = () => {

    const social = {
        backgroundImage: `url(${socialNetworkImage})`,
    };
    const todo = {
        backgroundImage: `url(${todoImage}`,
    };

    return (
        <div id='projects' className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text={'My Projects'}/>
                <div className={style.projects}>
                    <Project style={social} title={'Social network'} description={'Краткое опиание'} />
                    <Project style={todo} title={'Todo list'} description={'Краткое опиание'} />
                </div>
            </div>
        </div>
    );
};
