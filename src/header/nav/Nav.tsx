import React from 'react';
import style from './Nav.module.scss'
import {Link} from "react-scroll";


export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link to="main" activeClass={style.active} spy={true} smooth={true} offset={-70} duration={500}>Главная</Link>
            <Link to="skills" activeClass={style.active} spy={true} smooth={true} offset={-70} duration={500}>Скиллы</Link>
            <Link to="projects" activeClass={style.active} spy={true} smooth={true} offset={-70} duration={500}>Проекты</Link>
            <Link to="contacts" activeClass={style.active} spy={true} smooth={true} offset={-70} duration={500}>Контакты</Link>
        </div>
    );
};
