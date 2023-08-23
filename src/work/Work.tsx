import React from "react";
import style from "./Work.module.scss";
import { Title } from "../common/components/title/Title";
import { SvgComponent } from "../common/components/svgComponent/SvgComponents";
import { Link } from "react-scroll";

const Work = () => {
    return (
        <div className={style.workBlock}>
            <div className={style.work}>
                <Title text={"Considering remote work"} />
                <Link to="contacts" className={style.linkToWorkMe} spy={true} smooth={true} offset={-70} duration={500}>
                    Hire me
                </Link>
            </div>
            <SvgComponent fill={"2a2a2a"} />
        </div>
    );
};

export default Work;
