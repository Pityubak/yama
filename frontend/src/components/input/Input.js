import React from "react";

const Input = (props) =>
    <input type={props.type} placeholder={props.placeholder} className={props.className}
     onChange={props.onChange} name={props.name} defaultValue={props.value} ></input>


export default Input;

