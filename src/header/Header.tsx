import React, {useEffect, useState} from 'react';
import style from './Header.module.scss'
import {Nav} from './nav/Nav';
import {BurgerNav} from './burgerNav/BurgerNav';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={scrolled ? `${style.header} ${style.scrolled}` : style.header}>
            <Nav/>
            <BurgerNav/>
        </div>
    );
};
