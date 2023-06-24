import React from "react";
import style from "./Contacts.module.scss";
import { Title } from "../common/components/title/Title";
import { Fade } from "react-awesome-reveal";
import { SvgComponent } from "../common/components/SvgComponent/SvgComponents";
import { MyContact } from "./myContact/MyContact";

export const Contacts = () => {
    return (
        <div id="contacts" className={style.contactsBlock}>
            <Fade direction={"left"}>
                <div className={style.container}>
                    <Title text={"Contacts"} />
                    <div className={style.contactsContainer}>
                        <div className={style.myContacts}>
                            <MyContact title={"Address"} info={"Minsk, Belarus"} />
                            <MyContact title={"Phone"} info={"+375336139895"} />
                            <MyContact title={"Email"} info={"aleksandraviza@gmail.com"} />
                        </div>
                        <form className={style.form}>
                            <input placeholder={"full name"} type="text" />
                            <input placeholder={"e-mail"} type="email" />
                            <textarea placeholder={"your message"} />
                            <button type={"submit"} className={style.buttonSend}>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </Fade>
            <SvgComponent fill={"202020FF"} />
        </div>
    );
};
