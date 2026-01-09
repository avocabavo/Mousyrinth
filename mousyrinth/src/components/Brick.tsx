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
    const style = { left, top, width, height };
    return (
        <div className="ml-brick" style={style}>
            <div className="ml-brick__blocker">
                <div className="ml-brick__wall"></div>
            </div>
        </div>
    );
};
