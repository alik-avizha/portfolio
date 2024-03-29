import React from "react";
import style from "./Main.module.scss";
import photoImg from "../assets/image/mainNew.jpg";
import { ParticlesWrapper } from "../common/components/particles/Particle";
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from "react-typing-effect";
import { Tilt } from "react-tilt";
import { SvgComponent } from "../common/components/svgComponent/SvgComponents";

export const Main = () => {
    const photo = {
        backgroundImage: `url(${photoImg})`,
    };

    return (
        <div id="main" className={style.mainBlock}>
            <div className={style.particleWrapper}>
                <ParticlesWrapper />
            </div>
            <div className={style.container}>
                <div className={style.text}>
                    <Fade direction={"top-left"} delay={300} triggerOnce={true}>
                        <h4 className={style.title}>I am Aleksandr Avizha</h4>
                        <ReactTypingEffect text={["Frontend Developer"]} className={style.myJob} />
                    </Fade>
                </div>
                <Tilt options={{ max: 25 }}>
                    <div style={photo} className={style.photo}></div>
                </Tilt>
            </div>
            <SvgComponent fill={"202020FF"} />
        </div>
    );
};
