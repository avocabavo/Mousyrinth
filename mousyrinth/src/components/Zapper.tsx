import "./Zapper.css";

type ZapperProps = {
    left: string;
    top: string;
};

export function Zapper({ left, top }: ZapperProps) {
    const style = { left, top };
    return (
        <div className="ml-zapper" style={style}>
            <img
                className="ml-zapper__lantern"
                src="/svg/lantern.svg"
                alt=""
                draggable={false}
            />
            <div className="ml-zapper__blocker"></div>
        </div>
    );
}
