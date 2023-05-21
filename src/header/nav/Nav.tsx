import React from 'react';
import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={style.nav}>
            <a className={style.navigation} href="">Главная</a>
            <a className={style.navigation} href="">Скиллы</a>
            <a className={style.navigation} href="">Проекты</a>
            <a className={style.navigation} href="">Контакты</a>
        </div>
    );
};
