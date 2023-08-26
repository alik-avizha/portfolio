import React from "react";
import style from "./Contacts.module.scss";
import { Title } from "../common/components/title/Title";
import { Fade } from "react-awesome-reveal";
import { SvgComponent } from "../common/components/svgComponent/SvgComponents";
import { MyContact } from "./myContact/MyContact";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export const Contacts = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<FormDataType>({ mode: "onSubmit" });

    const onSubmit: SubmitHandler<FormDataType> = (data) => {
        axios
            .post("https://node-js-gmail.vercel.app/sendMessage", data)
            .then(() => {
                toast.success("Thank you for your letter!");
            })
            .catch(() => {
                toast.error("Sorry, there's been an error");
            });
        reset();
    };

    return (
        <div id="contacts" className={style.contactsBlock}>
            <Fade direction={"left"} delay={300} triggerOnce={true}>
                <div className={style.container}>
                    <Title text={"Contacts"} />
                    <div className={style.contactsContainer}>
                        <div className={style.myContacts}>
                            <MyContact title={"Address"} info={"Minsk, Belarus"} />
                            <MyContact title={"Phone"} info={"+375336139895"} />
                            <MyContact title={"Email"} info={"aleksandraviza@gmail.com"} />
                        </div>
                        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                            <input
                                placeholder={"full name"}
                                {...register("name", {
                                    required: "Name is require field!",
                                })}
                            />
                            {errors.name && <div className={style.errors}>{errors.name.message}</div>}
                            <input
                                placeholder={"e-mail"}
                                {...register("email", {
                                    required: "Email is require field!",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                            />
                            {errors.email && <div className={style.errors}>{errors.email.message}</div>}
                            <textarea
                                placeholder={"your message"}
                                {...register("message", {
                                    required: "Message is require field",
                                })}
                            />
                            {errors.message && <div className={style.errors}>{errors.message.message}</div>}
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

type FormDataType = {
    name: string;
    email: string;
    message: string;
};
