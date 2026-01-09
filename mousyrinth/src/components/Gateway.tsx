import { Link } from "react-router-dom";

// import { ReactComponent as DoorwaySvg } from '../assets/svg/doorway.svg';
// import { ReactComponent as DoorSvg } from '../assets/svg/door.svg';

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
        <div className="ml-gateway" style={style}>
            <img
                className="ml-gateway__doorway"
                src="/svg/doorway.svg"
                alt=""
                draggable={false}
            />

            <img
                className="ml-gateway__door"
                src="/svg/door.svg"
                alt=""
                draggable={false}
            />

            <div className="ml-gateway__link-container">
                <Link className="ml-gateway__link" to={to} tabIndex={-1}>
                    {text}
                </Link>
            </div>
        </div>
    );
}
