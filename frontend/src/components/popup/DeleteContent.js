import React from "react";
import Button from "../button/Button";
import "./Popup.scss";
const DeleteContent = (props) => {
    return (

        <div className={"content"} >
            <div className={"content-upper"}><h2>Are you sure delete this Yama?</h2></div>
            <div className={"content-bottom"}>
                <Button text="Delete" onClick={props.delete} className={"content-btn "} />
                <Button text="Cancel" onClick={props.cancel} className={"content-btn "} />
            </div>
        </div>

    )
}

export default DeleteContent;