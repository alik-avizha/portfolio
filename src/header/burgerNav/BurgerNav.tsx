import React, {useState} from 'react';
import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";
import burger from '../../assets/image/burger.svg'

export const BurgerNav = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)

    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <div className={style.burgerNav}>
            <div className={menuIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
                <Link to="main" activeClass={style.active} spy={true} smooth={true} offset={-70}
                      duration={500}>Главная</Link>
                <Link to="skills" activeClass={style.active} spy={true} smooth={true} offset={-70}
                      duration={500}>Скиллы</Link>
                <Link to="projects" activeClass={style.active} spy={true} smooth={true} offset={-70}
                      duration={500}>Проекты</Link>
                <Link to="contacts" activeClass={style.active} spy={true} smooth={true} offset={-70}
                      duration={500}>Контакты</Link>
            </div>
            <div className={style.burgerBtn} onClick={onBurgerBtnClick}>
                <img src={burger} alt="burger"/>
            </div>
        </div>
    );
};
