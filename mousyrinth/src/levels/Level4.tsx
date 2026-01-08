import { Umbrella } from "../components/Umbrella";
import { Gateway } from "../components/Gateway";
import { Brick } from "../components/Brick";
import { Zapper } from "../components/Zapper";

export function Level4() {
    const levelStyle = {
        height: "50vw",
    };

    return (
        <div className="ml-level" style={levelStyle}>
            <Brick
                top="20vw"
                left="20vw"
                width="60vw"
                height="5vw"
            />
            <Brick
                top="0"
                left="20vw"
                width="5vw"
                height="25vw"
            />

            <Umbrella top="27vw" left="40vw"/>
            <Umbrella top="27vw" left="50vw"/>
            <Umbrella top="27vw" left="60vw"/>

            <Zapper top="0" left="55vw"/>
            <Zapper top="5vw" left="55vw"/>
            <Zapper top="10vw" left="55vw"/>
            <Zapper top="15vw" left="55vw"/>

            <Gateway
                left="45vw"
                top="5vw"
                text="Level 5"
                to="/level/5"
            />
        </div>
    );
}
