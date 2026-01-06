import { Gateway } from "../components/Gateway";

import "./Level.css";

export function Level1() {
    const levelStyle = {
        height: "50vw",
    };

    return (
        <div className="ml-level" style={levelStyle}>
            <Gateway
                left="80vw"
                top="40vw"
                text="Level 2"
                to="/level/2"
            />
        </div>
    );
}
