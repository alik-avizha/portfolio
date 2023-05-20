import React from 'react';
import style from './Work.module.css'
import styleContainer from '../common/styles/Container.module.css'


const Work = () => {
    return (
        <div className={style.workBlock}>
            <div className={`${styleContainer.container} ${style.work}`}>
                <h3 className={style.title}>Рассматриваю варианты удаленной работы</h3>
                <a href={''} className={style.linkToWorkMe}>Нанять меня</a>
            </div>
        </div>

    );
};

export default Work;