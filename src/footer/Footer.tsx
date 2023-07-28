import React from "react";
import style from "./Footer.module.scss";
import telegramIcon from "../assets/image/telegram.svg";
import linkedinIcon from "../assets/image/linkedin.svg";
import instagramIcon from "../assets/image/instagram.svg";
import githubIcon from "../assets/image/github.svg";

export const Footer = () => {
    const contacts = [
        { contactStyle: { backgroundImage: `url(${telegramIcon})` }, url: "https://t.me/alik_avi" },
        {
            contactStyle: { backgroundImage: `url(${linkedinIcon})` },
            url: "https://www.linkedin.com/in/aleksandr-avizha",
        },
        { contactStyle: { backgroundImage: `url(${instagramIcon})` }, url: "https://www.instagram.com/alik.avi" },
        { contactStyle: { backgroundImage: `url(${githubIcon})` }, url: "https://github.com/alik-avizha" },
    ];

    return (
        <footer className={style.footerBlock}>
            <div className={style.footer}>
                <h3 className={style.title}>Aleksandr Avizha</h3>
                <div className={style.footerContacts}>
                    {contacts.map((el, index) => {
                        return (
                            <a
                                key={index}
                                href={el.url}
                                style={el.contactStyle}
                                className={style.footerContact}
                                target="_blank"
                                rel="noreferrer"
                            ></a>
                        );
                    })}
                </div>
                <h3 className={style.rights}>@2023 All rights reserved</h3>
            </div>
        </footer>
    );
};
