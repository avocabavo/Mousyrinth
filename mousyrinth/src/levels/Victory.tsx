import { BarrierStrip } from "../components/BarrierStrip";
import { Zapper } from "../components/Zapper";

import "./Level.css";

export function Victory() {
    const levelStyle = {
        height: "50vw",
    };

    return (
        <div className="pagework">
            <BarrierStrip placement="ceiling" />
            <div className="mid-section">
                <div className="level-holder">
                    <div className="level-itself" style={levelStyle}>
                        <h1 className="victory">Victory!</h1>
                        <Zapper left="20vw" top="0vw"/>
                        <Zapper left="75vw" top="0vw"/>
                        <Zapper left="20vw" top="45vw"/>
                        <Zapper left="75vw" top="45vw"/>
                    </div>
                </div>
            </div>
            <BarrierStrip placement="floor" />
        </div>
    );
}
