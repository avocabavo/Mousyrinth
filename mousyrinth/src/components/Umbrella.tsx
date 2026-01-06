import "./Umbrella.css";

type UmbrellaProps = {
    left: string;
    top: string;
};

export function Umbrella({ left, top }: UmbrellaProps) {
    const style = { left, top };
    return (
        <div className="ml-umbrella" style={style}>
            <div className="ml-umbrella__image-holder">
                <img
                    className="ml-umbrella__handle"
                    src="/svg/umbrella-handle.svg"
                    alt=""
                    draggable={false}
                />
                <img
                    className="ml-umbrella__fabric"
                    src="/svg/umbrella-fabric.svg"
                    alt=""
                    draggable={false}
                />
            </div>
            <div className="ml-umbrella__blocker"></div>
        </div>
    );
}
