import "./Ratchet.css";

type RatchetProps = {
    left: string;
    top: string;
};

export function Ratchet({ left, top }: RatchetProps) {
    const style = { left, top };
    return (
        <div className="ml-ratchet" style={style}>
            <div className="ml-ratchet__paddle"></div>
            <div className="ml-ratchet__cw-arrow"></div>
            <div className="ml-ratchet__ccw-arrow"></div>
            <img
                className="ml-ratchet__arrows"
                src="/svg/ratchet-arrows.svg"
                alt=""
                draggable={false}
            />
        </div>
    );
};
