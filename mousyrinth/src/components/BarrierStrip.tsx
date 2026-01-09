/*
Barrier strips are important for stopping a too-easy cheat.

Without a barrier that sticks to the top and bottom of the page, on a level requiring vertical scrolling, scrolling so that the gateway is near the top or bottom edge of the page would let the mouse enter the level next to the gateway, bypassing the maze.

Unlike other components, this should be added to each level _outside_ of the level-itself.
*/

import "./BarrierStrip.css";

type BarrierStripProps = {
    placement: "ceiling" | "floor";
};

export function BarrierStrip({ placement }: BarrierStripProps) {
    return (
        <div className={'barrier-strip barrier-strip-' + placement}></div>
    );
};
