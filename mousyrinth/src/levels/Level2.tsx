import { Gateway } from "../components/Gateway";
import { Zapper } from "../components/Zapper";

import "./Level.css";

export function Level2() {
    const levelStyle = {
        height: "50vw",
    };

    return (
        <div className="ml-level" style={levelStyle}>
            <Zapper
                left="10vw"
                top="20vw"
            />
            <Gateway
                left="30vw"
                top="20vw"
                text="Level 2"
                to="/level/2"
            />
        </div>
    );
}
