import React from 'react';
import style from './Footer.module.scss'
import telegramIcon from '../assets/image/telegram.svg';
import linkedinIcon from '../assets/image/linkedin.svg';
import instagramIcon from '../assets/image/instagram.svg';
import githubIcon from '../assets/image/github.svg';

export const Footer = () => {

    const telegram = {
        backgroundImage: `url(${telegramIcon})`,
    };
    const linkedin = {
        backgroundImage: `url(${linkedinIcon})`,
    };
    const instagram = {
        backgroundImage: `url(${instagramIcon})`,
    };
    const github = {
        backgroundImage: `url(${githubIcon})`,
    };

    return (
        <footer className={style.footerBlock}>
            <div className={style.footer}>

                <h3 className={style.title}>Aleksandr Avizha</h3>
                <div className={style.footerContacts}>
                    <a href={''} style={telegram} className={style.footerContact}></a>
                    <a href={''} style={linkedin} className={style.footerContact}></a>
                    <a href={''} style={instagram} className={style.footerContact}></a>
                    <a href={''} style={github} className={style.footerContact}></a>
                </div>
                <h3 className={style.rights}>@2023 All rights reserved</h3>
            </div>
        </footer>
    );
};