import { BarrierStrip } from "../components/BarrierStrip";
import { Gateway } from "../components/Gateway";
import { Zapper } from "../components/Zapper";
import { Umbrella } from "../components/Umbrella";
import { Brick } from "../components/Brick";

export function Level4() {
    const levelStyle = {
        height: "50vw",
    };

    return (
        <div className="pagework">
            <BarrierStrip placement="ceiling" />
            <div className="mid-section">
                <div className="level-holder">
                    <div className="level-itself" style={levelStyle}>
                        <Brick
                            top="30vw"
                            left="20vw"
                            width="60vw"
                            height="5vw"
                        />
                        <Brick
                            top="5vw"
                            left="20vw"
                            width="5vw"
                            height="30vw"
                        />
                        <Brick
                            top="5vw"
                            left="20vw"
                            width="60vw"
                            height="5vw"
                        />

                        <Umbrella top="37vw" left="40vw"/>
                        <Umbrella top="37vw" left="50vw"/>
                        <Umbrella top="37vw" left="60vw"/>

                        <Zapper top="10vw" left="55vw"/>
                        <Zapper top="15vw" left="55vw"/>
                        <Zapper top="20vw" left="55vw"/>
                        <Zapper top="25vw" left="55vw"/>

                        <Gateway
                            left="45vw"
                            top="17.5vw"
                            text="Level 5"
                            to="/level/5"
                        />
                    </div>
                </div>
            </div>
            <BarrierStrip placement="floor" />
        </div>
    );
}
