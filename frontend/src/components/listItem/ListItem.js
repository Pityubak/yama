import React from 'react';

const ListItem = (props) => {
    return (
        <div className={props.className} onClick={props.onClick} >{props.children}</div>
    )
}

export default ListItem;