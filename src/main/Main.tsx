import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import photoImg from '../assets/image/mainImage.jpg'

export const Main = () => {

    const photo =  {
        backgroundImage: `url(${photoImg})`,
    };

    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <h4 className={style.title}>I am Aleksandr Avizha</h4>
                    <p className={style.myJob}>Frontend Developer</p>
                </div>
                <div style={photo} className={style.photo}></div>
            </div>
        </div>
    );
};
