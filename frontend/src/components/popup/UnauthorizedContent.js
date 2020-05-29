import React from "react";
import Button from "../button/Button";
import "./Popup.scss";
const UnauthorizedContent = (props) => {
    return (

        <div className={"content"} >
            <div className={"content-upper"}><h2>You have not permission to delete yama.</h2></div>
            <div className={"content-bottom"}>
                <Button text="Ok" onClick={props.onClick} className={"content-btn "} />
            </div>
        </div>

    )
}

export default UnauthorizedContent;
