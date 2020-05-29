import React from "react";
import "./Popup.scss";

const Popup = (props) => {
    return (
        <div className={"modal"}>
            <div className={"modal-panel"}>
                <div className={"modal-title"}>{props.title}
                    <div className={"modal-close"} onClick={props.onClick}>X</div>
                </div>
                <div className={"modal-inner"}>
                    {props.children}
                </div>

            </div>
        </div>
    );

}

export default Popup;