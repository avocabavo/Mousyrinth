import "./BarrierStrip.css";

type BarrierStripProps = {
    placement: "ceiling" | "floor";
};

export function BarrierStrip({ placement }: BarrierStripProps) {
    return (
        <div className={'barrier-strip barrier-strip-' + placement}></div>
    );
};
