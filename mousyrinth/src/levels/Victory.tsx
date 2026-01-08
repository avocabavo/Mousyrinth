import "./Level.css";

export function Victory() {
    const levelStyle = {
        height: "50vw",
    };

    return (
        <div className="ml-level" style={levelStyle}>
            <h1 className="victory">Victory!</h1>
        </div>
    );
}
