/*
A Ratchet is shaped like an exclaimation point.
Hovering over either half of the dot will rotate this element around the dot, potentially covering other elements and allowing the mouse to pass over those other elements without triggering their hovers.
This element will slowly return to its resting orientation when not hovered.
*/

import "./Ratchet.css";

type RatchetProps = {
    left: string;
    top: string;
};

export function Ratchet({ left, top }: RatchetProps) {
    const style = { left, top };
    return (
        <div className="ml-ratchet" style={style}>
            <div className="ml-ratchet__paddle"></div>
            <div className="ml-ratchet__cw-arrow"></div>
            <div className="ml-ratchet__ccw-arrow"></div>
            <img
                className="ml-ratchet__arrows"
                src="/svg/ratchet-arrows.svg"
                alt=""
                draggable={false}
            />
        </div>
    );
};
