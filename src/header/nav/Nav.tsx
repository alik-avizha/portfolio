import React from "react";
import style from "./Nav.module.scss";
import { Link } from "react-scroll";

export const Nav = () => {
    return (
        <div className={style.nav}>
            <Link to="main" activeClass={style.active} spy={true} smooth={true} offset={-70} duration={500}>
                Main
            </Link>
            <Link to="skills" activeClass={style.active} spy={true} smooth={true} offset={-55} duration={500}>
                Skills
            </Link>
            <Link to="projects" activeClass={style.active} spy={true} smooth={true} offset={-45} duration={500}>
                Projects
            </Link>
            <Link to="contacts" activeClass={style.active} spy={true} smooth={true} offset={-39} duration={500}>
                Contacts
            </Link>
        </div>
    );
};
