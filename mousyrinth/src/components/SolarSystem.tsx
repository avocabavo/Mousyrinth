/*
The Moon part of a Solar System element blocks, but this component has no hover triggers.
Unlike other components, the parts of a Solar System move steadily along predefined orbit-like paths.
*/

import "./SolarSystem.css";

type SolarSystemProps = {
    left: string;
    top: string;
    starAngularVelocity: number;   // degrees per second
    planetAngularVelocity: number; // degrees per second
    planetOrbitRadius: string;     // e.g. "6vw"
    moonOrbitRadius: string;       // e.g. "2vw"
};

export function SolarSystem({
    left,
    top,
    starAngularVelocity,
    planetAngularVelocity,
    planetOrbitRadius,
    moonOrbitRadius,
}: SolarSystemProps) {
    const style = {
        left,
        top,
        "--star-rotation-duration": `${360 / starAngularVelocity}s`,
        "--planet-rotation-duration": `${360 / planetAngularVelocity}s`,
        "--planet-orbit-radius": planetOrbitRadius,
        "--moon-orbit-radius": moonOrbitRadius,
     };
    return (
        <div
            className="solar-system"
            style={style}
        >
            <div className="star">
                <div className="star-visual"></div>
                <div className="planet-orbit">
                    <div className="planet-visual"></div>
                    <div className="planet-rotation">
                        <div className="moon" />
                    </div>
                </div>
            </div>
        </div>
    );
};
