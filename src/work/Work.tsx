import React from 'react';
import style from './Work.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Title} from '../common/components/title/Title';


const Work = () => {
    return (
        <div className={style.workBlock}>
            <div className={`${styleContainer.container} ${style.work}`}>
                <Title text={'Considering remote work'}/>
                <a href={''} className={style.linkToWorkMe}>Нанять меня</a>
            </div>
        </div>

    );
};

export default Work;