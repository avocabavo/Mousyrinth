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
        <div className="ratchet" style={style}>
            <div className="ratchet-paddle"></div>
            <div className="ratchet-cw-arrow"></div>
            <div className="ratchet-ccw-arrow"></div>
            <img
                className="ratchet-arrows"
                src="/svg/ratchet-arrows.svg"
                alt=""
                draggable={false}
            />
        </div>
    );
};
