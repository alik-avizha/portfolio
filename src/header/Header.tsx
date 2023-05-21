import React from 'react';
import style from './Header.module.scss'
import {Nav} from './nav/Nav';
import styleContainer from '../common/styles/Container.module.css'

export const Header = () => {
    return (
        <div className={style.header}>
            <div className={styleContainer.container}>
                <Nav/>
            </div>
        </div>

    );
};
