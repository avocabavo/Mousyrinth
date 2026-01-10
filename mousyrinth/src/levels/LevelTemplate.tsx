import { BarrierStrip } from "../components/BarrierStrip";
import { Gateway } from "../components/Gateway";
// TODO - import more components as needed

import "./Level.css";

export function LevelName() {
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
                            left="50vw"
                            top="25vw"
                            text="Victory!"
                            to="/level/Victory"
                        />
                    </div>
                </div>
            </div>
            <BarrierStrip placement="floor" />
        </div>
    );
}
