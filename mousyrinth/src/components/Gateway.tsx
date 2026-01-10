/*
A Gateway is the objective of each level, containing a link to the next level that is only revealed when the gateway itself is hovered.
*/

import { Link } from "react-router-dom";

import "./Gateway.css";

type GatewayProps = {
    left: string;
    top: string;
    text: string;
    to: string;
};

export function Gateway({ left, top, text, to }: GatewayProps) {
    const style = { left, top };
    return (
        <div className="gateway" style={style}>
            <img
                className="gateway-doorway"
                src="/svg/doorway.svg"
                alt=""
                draggable={false}
            />

            <img
                className="gateway-door"
                src="/svg/door.svg"
                alt=""
                draggable={false}
            />

            <div className="gateway-link-container">
                <Link className="gateway-link" to={to} tabIndex={-1}>
                    {text}
                </Link>
            </div>
        </div>
    );
}
