import { BarrierStrip } from "../components/BarrierStrip";
import { Gateway } from "../components/Gateway";
import { Brick } from "../components/Brick";
import { Zapper } from "../components/Zapper";
import { SolarSystem } from "../components/SolarSystem";
import { parseZapperLayoutCsv } from "../game-utils/parsers";

import "./Level.css";

import zapperLayoutCsv from "./Level6.layout.csv?raw";

export function Level6() {
    const levelStyle = {
        height: "75vw",
    };

    const zappers = parseZapperLayoutCsv(zapperLayoutCsv);

    return (
        <div className="pagework">
            <BarrierStrip placement="ceiling" />
            <div className="mid-section">
                <div className="level-holder">
                    <div className="level-itself" style={levelStyle}>
                        <Brick
                            top="0"
                            left="25vw"
                            width="75vw"
                            height="5vw"
                        />
                        <Brick
                            top="70vw"
                            left="35vw"
                            width="65vw"
                            height="5vw"
                        />
                        <Brick
                            top="0"
                            left="95vw"
                            width="5vw"
                            height="75vw"
                        />
                        <Brick
                            top="0"
                            left="25vw"
                            width="5vw"
                            height="65vw"
                        />

                        {zappers.map((z, i) => (
                            <Zapper key={i} left={z.left} top={z.top} />
                        ))}

                        <SolarSystem
                            left="52.5vw"
                            top="27.5vw"
                            starAngularVelocity={20}
                            planetAngularVelocity={80}
                            planetOrbitRadius="20vw"
                            moonOrbitRadius="5vw"
                        />

                        <Gateway
                            left="85vw"
                            top="10vw"
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
