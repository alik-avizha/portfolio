import React from 'react';
import style from './SvgItem.module.scss';

type SvgComponentPropsType = {
    fill: string
}

export const SvgComponent = (props: SvgComponentPropsType) => {
    return (
        <div className={style.svgBk}>
            <svg x="0px" y="0px" viewBox="0 186.5 1920 113.5" fill={`#${props.fill}`}>
                <polygon points="0,300 655.167,210.5 1432.5,300 1920,198.5 1920,300 "></polygon>
            </svg>
        </div>
    );
};
