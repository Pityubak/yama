import React from 'react';

const Button = (props) =>
    <button onClick={props.onClick} type={props.type} className={props.className}>{props.text}</button>

export default Button;