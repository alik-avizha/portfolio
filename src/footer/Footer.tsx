import React from "react";
import style from "./Footer.module.scss";
import { LinksNameType, SvgSelector } from "../common/components/svgSelector/SvgSelector";

type ContactType = {
    svg: LinksNameType;
    url: string;
};
export const Footer = () => {
    const contacts: ContactType[] = [
        { svg: `TELEGRAM`, url: "https://t.me/alik_avi" },
        { svg: `LINKEDIN`, url: "https://www.linkedin.com/in/aleksandr-avizha" },
        { svg: `INSTAGRAM`, url: "https://www.instagram.com/alik.avi" },
        { svg: `GITHUB`, url: "https://github.com/alik-avizha" },
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
                                className={style.footerContact}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SvgSelector svgName={el.svg} />
                            </a>
                        );
                    })}
                </div>
                <h3 className={style.rights}>@2023 All rights reserved</h3>
            </div>
        </footer>
    );
};
