import { BarrierStrip } from "../components/BarrierStrip";
import { Gateway } from "../components/Gateway";
import { Umbrella } from "../components/Umbrella";

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
        <div className="pagework">
            <BarrierStrip placement="ceiling" />
            <div className="mid-section">
                <div className="level-holder">
                    <div className="level-itself" style={levelStyle}>
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
                </div>
            </div>
            <BarrierStrip placement="floor" />
        </div>
    );
}
