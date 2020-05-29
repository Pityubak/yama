import React from "react";
import Yama from "../yama/Yama";

const ViewContent = (props) => {
    return (
        <Yama backgroundColor={props.currentColor} hasThreeEyes={props.hasThreeEyes}></Yama>
    )
}

export default ViewContent;