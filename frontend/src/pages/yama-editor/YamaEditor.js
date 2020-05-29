import React from "react";
import { Component } from "react";

import Button from "../../components/button/Button";
import List from "../../components/list/List";
import ListItem from "../../components/listItem/ListItem";

class YamaEditor extends Component {

    render() {
        return (
            <div>
               <List>
                   <ListItem></ListItem>
               </List>
                <Button text="Add yama"></Button>
                <Button text="Remove yama"></Button>
                <Button text="Update yama"></Button>
            </div>
        )
    }
}

export default YamaEditor;