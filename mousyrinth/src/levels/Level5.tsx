import { Gateway } from "../components/Gateway";
import { Brick } from "../components/Brick";
import { Zapper } from "../components/Zapper";
import { Ratchet } from "../components/Ratchet";
import { parseZapperLayoutCsv } from "../game-utils/parsers";

import "./Level.css";

import zapperLayoutCsv from "./Level5.layout.csv?raw";

export function Level5() {
    const levelStyle = {
        height: "50vw",
    };

    const zappers = parseZapperLayoutCsv(zapperLayoutCsv);

    return (
        <div className="ml-level" style={levelStyle}>
            <Brick
                top="15vw"
                left="10vw"
                width="5vw"
                height="25vw"
            />
            <Brick
                top="15vw"
                left="10vw"
                width="25vw"
                height="5vw"
            />
            <Brick
                top="35vw"
                left="10vw"
                width="25vw"
                height="5vw"
            />
            <Brick
                top="15vw"
                left="45vw"
                width="5vw"
                height="25vw"
            />

            {zappers.map((z, i) => (
                <Zapper key={i} left={z.left} top={z.top} />
            ))}

            <Ratchet  top="25vw" left="5vw" />
            <Ratchet  top="25vw" left="50vw" />

            <Gateway
                left="15vw"
                top="30vw"
                text="Victory!"
                to="/level/Victory"
            />
        </div>
    );
}
