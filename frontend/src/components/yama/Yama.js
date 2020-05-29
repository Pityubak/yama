import React from "react";
import "./Yama.scss";
import Eye from "./Eye";
const Yama = (props) => {
    return (
        <div style={{ background: `radial-gradient(circle at 100px 100px, ${props.backgroundColor}, #000)`}} className={"yama"} >
            {!props.hasThreeEyes ? <div className={"yama-box"}><Eye /> <Eye /> <div className={"mouth"}></div></div>
                : <div className={"yama-box"}><Eye isBig={true} /> <Eye /> <Eye /><div className={"mouth"}></div></div>}
        </div>
    );
}
export default Yama;