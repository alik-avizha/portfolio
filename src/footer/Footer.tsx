import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footer}`}>
                <h3 className={style.title}>Авижа Александр</h3>
                <div className={style.footerContacts}>
                    <div className={style.footerContact}></div>
                    <div className={style.footerContact}></div>
                    <div className={style.footerContact}></div>
                    <div className={style.footerContact}></div>
                </div>
                <h3 className={style.rights}>@2023 Все права защищены</h3>
            </div>
        </footer>
    );
};
