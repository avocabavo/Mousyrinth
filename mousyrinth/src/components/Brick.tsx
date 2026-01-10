/*
Bricks are the standard hard barrier in the maze.

Bricks block out the level instantly and completely when touched.

Most other blockers render _under_ bricks.
*/

import "./Brick.css";

type BrickProps = {
    left: string;
    top: string;
    width: string;
    height: string;
};

export function Brick({ left, top, width, height }: BrickProps) {
    const style = {
        "--closed-left": left,
        "--closed-top": top,
        "--closed-width": width,
        "--closed-height": height
    } as React.CSSProperties;
    return (
        <div className="brick" style={style}>
            {/* <div className="brick-blocker"> */}
                <div className="brick-pattern"></div>
            {/* </div> */}
        </div>
    );
};
