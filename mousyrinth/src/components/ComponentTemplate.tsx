/*
Use this as a starting point for new components
*/

import "./ComponentName.css";

type ComponentNameProps = {
    left: string;
    top: string;
};

export function ComponentName({ left, top }: ComponentNameProps) {
    const style = { left, top };
    return (
        <div className="component-name" style={style}>
            <div className="component-name-image-holder">
                <img
                    className="component-name-icon"
                    src="/svg/component-name-icon.svg"
                    alt=""
                    draggable={false}
                />
            </div>
            <div className="component-name-blocker"></div>
        </div>
    );
}
