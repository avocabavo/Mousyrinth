import { BarrierStrip } from "../components/BarrierStrip";
import { Gateway } from "../components/Gateway";
import { Zapper } from "../components/Zapper";
import { parseZapperLayoutCsv } from "../game-utils/parsers";

import "./Level.css";

import zapperLayoutCsv from "./Level2.layout.csv?raw";

export function Level2() {
    const levelStyle = {
        height: "50vw",
    };

    const zappers = parseZapperLayoutCsv(zapperLayoutCsv);

    return (
        <div className="pagework">
            <BarrierStrip placement="ceiling" />
            <div className="mid-section">
                <div className="level-holder">
                    <div className="level-itself" style={levelStyle}>
                        {zappers.map((z, i) => (
                            <Zapper key={i} left={z.left} top={z.top} />
                        ))}
                        <Gateway
                            left="30vw"
                            top="20vw"
                            text="Level 3"
                            to="/level/3"
                        />
                    </div>
                </div>
            </div>
            <BarrierStrip placement="floor" />
        </div>
    );
}
