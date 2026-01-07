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
            className="ml-solar-system"
            style={style}
        >
            <div className="ml-star">
                <div className="ml-star__visual"></div>
                <div className="ml-planet-orbit">
                    <div className="ml-planet__visual"></div>
                    <div className="ml-planet-rotation">
                        <div className="ml-moon" />
                    </div>
                </div>
            </div>
        </div>
    );
};
