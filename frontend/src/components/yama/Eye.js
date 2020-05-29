import React from "react";
import "./Yama.scss";
const Eye = (props) => {
    return (
        <div className={props.isBig ? "yama-eye yama-eye--big" : "yama-eye"}>
            <div className={"yama-eye--core"}></div>
        </div>
    );
}
export default Eye;