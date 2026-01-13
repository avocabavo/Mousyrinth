import { BarrierStrip } from "../components/BarrierStrip";
import { Gateway } from "../components/Gateway";
import { Zapper } from "../components/Zapper";

import { spiral } from "../game-utils/arrangers";

import "./Level.css";

export function ZapperSpiral() {
    const levelStyle = {
        height: "100vw",
    };

    const zapperPoints = spiral(
        65,
        {x: 50, y: 50},
        5, 0,
        30, Math.PI * 4.5
    );

    return (
        <div className="pagework">
            <BarrierStrip placement="ceiling" />
            <div className="mid-section">
                <div className="level-holder">
                    <div className="level-itself" style={levelStyle}>
                        {zapperPoints.map((p, i)=> (
                            <Zapper
                                key={i}
                                left={p.x + "vw"}
                                top={p.y + "vw"}
                            />
                        ))}
                        <Gateway
                            left="47.5vw"
                            top="47.5vw"
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
