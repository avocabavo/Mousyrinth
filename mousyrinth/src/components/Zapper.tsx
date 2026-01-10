/*
Zappers are the standard soft barrier in the maze.

Zappers block out the level instantly and completely when touched.

Most other blockers render _over_ Zappers, allowing the mouse to get past Zappers.
*/

import "./Zapper.css";

type ZapperProps = {
    left: string;
    top: string;
    width?: string;
    height?: string;
};

export function Zapper({ left, top, width="5vw", height="5vw" }: ZapperProps) {
    const style = {
        "--zapper-left": left,
        "--zapper-top": top,
        "--zapper-width": width,
        "--zapper-height": height
    } as React.CSSProperties;
    return (
        <div className="zapper" style={style}>
            <img
                className="zapper-lantern"
                style={style}
                src="/svg/lantern.svg"
                alt=""
                draggable={false}
            />
            {/* <div className="zapper__blocker"></div> */}
        </div>
    );
}
