import React from 'react';
import { Component } from "react";
import ListItem from '../../components/listItem/ListItem';
import List from '../../components/list/List';

import "./Sidebar.scss";
import { Link } from 'react-router-dom';
import HomeIcon from "../../components/icon/HomeIcon";
import YamaIcon from '../../components/icon/YamaIcon';
import AboutIcon from '../../components/icon/AboutIcon';
import Yama from '../../components/yama/Yama';


class Sidebar extends Component {

    constructor() {
        super();
        this.state={
            classes : [false, false, false]
        };
    }
    handlePanel(index) {

        let cl = [false, false, false];
        cl[index] = true;
        this.setState({ classes: cl })
    }

    render() {
        return (


            <List className={"sidebar"}>
                <div className="sidebar-yama">
                    <Yama />
                </div>
                <ListItem text="Home" onClick={this.handlePanel.bind(this, 0)}
                    className={this.state.classes[0] ? "sidebar-item active" : "sidebar-item"}>
                    <HomeIcon className={"icon"} />  <Link className={"sidebar-link"} to="/" >Main page</Link></ListItem>
                <ListItem text="YamaWorld" onClick={this.handlePanel.bind(this, 1)}
                    className={this.state.classes[1] ? "sidebar-item active" : "sidebar-item"}>
                    <YamaIcon className={"icon"} /> <Link className={"sidebar-link"} to="/editor" >Yama World </Link></ListItem>
                <ListItem text="About Yama" onClick={this.handlePanel.bind(this, 2)}
                    className={this.state.classes[2] ? "sidebar-item active" : "sidebar-item"}>
                    <AboutIcon className={"icon"} /><Link className={"sidebar-link"} to="/about" > About Yama</Link></ListItem>
            </List>
        );
    }

}

export default Sidebar;