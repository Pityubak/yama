import React from "react";

const Form = (props) => {
    <form method={props.method} action={props.action}>{props.children}</form>
}
export default Form;