import React from 'react';

const Base = (props) => {
    return (
        <div className={props.className} >{props.children}</div>
    )
}

export default Base;