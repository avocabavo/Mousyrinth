import { Umbrella } from "../components/Umbrella";
import { Gateway } from "../components/Gateway";

type vwPosition = {
    left: number;
    top: number;
}

export function Level3() {
    const levelStyle = {
        height: "50vw",
    };

    const umbrellaRingCenter = {
        left: 65,
        top: 20,
    };
    const umbrellaRingRadius = 10;
    const umbrellaRingCount = 13;
    const umbrellaRingAngleOffset = 0;
    const umbrellaRingAngularSpacing = 2 * Math.PI / umbrellaRingCount;
    const umbrellaRingPositions: vwPosition[] = Array.from(
        { length: umbrellaRingCount },
        (_, i) => {
            const angle = umbrellaRingAngleOffset + i * umbrellaRingAngularSpacing;
            const left =
                umbrellaRingCenter.left +
                umbrellaRingRadius * Math.cos(angle);
            const top =
                umbrellaRingCenter.top +
                umbrellaRingRadius * Math.sin(angle);
            return { left, top };
        }
    );

    return (
        <div className="ml-level" style={levelStyle}>
            {umbrellaRingPositions.map((position, i)=> (
                <Umbrella
                    key={i}
                    left={position.left + "vw"}
                    top={position.top + "vw"}
                />
            ))}

            <Gateway
                left="65vw"
                top="20vw"
                text="Level 4"
                to="/level/4"
            />
        </div>
    );
}
