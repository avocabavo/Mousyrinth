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
        <div className="ml-level" style={levelStyle}>
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
    );
}
