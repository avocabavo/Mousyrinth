import { BarrierStrip } from "../components/BarrierStrip";
import { Gateway } from "../components/Gateway";

import "./Level.css";

export function Level1() {
    const levelStyle = {
        height: "50vw",
    };

    return (
        <div className="pagework">
            <BarrierStrip placement="ceiling" />
            <div className="mid-section">
                <div className="level-holder">
                    <div className="level-itself" style={levelStyle}>
                        <Gateway
                            left="80vw"
                            top="40vw"
                            text="Level 2"
                            to="/level/2"
                        />
                    </div>
                </div>
                <BarrierStrip placement="floor" />
            </div>
        </div>
    );
}
