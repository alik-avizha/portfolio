import React from "react";
import style from "./MyContact.module.scss";

type MyContactPropsType = {
    title: string;
    info: string;
};

export const MyContact = (props: MyContactPropsType) => {
    return (
        <div className={style.myContactsItem}>
            <h3 className={style.contactsTitleInfo}>{props.title}</h3>
            <span className={style.contactsDescInfo}>{props.info}</span>
        </div>
    );
};
