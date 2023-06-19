import React from 'react';
import style from './Work.module.scss'
import {Title} from '../common/components/title/Title';


const Work = () => {
    return (
        <div className={style.workBlock}>
            <div className={style.work}>
                <Title text={'Considering remote work'}/>
                <a href={''} className={style.linkToWorkMe}>Нанять меня</a>
            </div>
        </div>

    );
};

export default Work;