import React from "react";
import s from "./StackList.module.scss";
import useWindowDimensions from "../../common/utils/useWindowDimensions";
import { projectStack, StackTitle } from "../../common/data/projects/project-stack";

export const StackList = ({ items }: { items: StackTitle[] }) => {
    const { width } = useWindowDimensions();

    return (
        <div className={`${s.container} ${items.length > 6 && width > 750 ? s.twoColumns : ""}`}>
            {items.map((t) => {
                let image: string | null = null;
                for (const element of projectStack) {
                    if (element.title === t) {
                        image = element.img;
                        break;
                    }
                }
                if (!image) {
                    return null;
                }
                return (
                    <div className={s.item} key={t}>
                        <>
                            <div className={s.logoContainer}>
                                <img alt={t} src={image} />
                            </div>
                            <p>{t}</p>
                        </>
                    </div>
                );
            })}
        </div>
    );
};
