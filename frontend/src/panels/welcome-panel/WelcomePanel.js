import React, { Component } from "react";
import "./WelcomePanel.scss";
import Yama from '../../components/yama/Yama'
import { Link } from "react-router-dom";

import ShieldIcon from "../../components/icon/ShieldIcon";
import LibIcon from "../../components/icon/LibIcon";

class WelcomePanel extends Component {

    constructor() {
        super();
        this.state = {
            colors: ["red", "green", "blue", "purple", "yellow", "orange", "steelblue"],
            currentColor: "red"
        }
    }

    changeColor() {
        const index = Math.floor(Math.random() * 8);
        this.setState({ currentColor: this.state.colors[index] });
    }
    render() {
        return (<div className={"welcome"}>
            <div className={"welcome-title"}><h1>UNOFFICIAL YAMA TRADING</h1></div>
            <div className={"welcome-box"} onClick={this.changeColor.bind(this)}>
                <Yama backgroundColor={this.state.currentColor} />
            </div>
            <div className={"welcome-info"}>

                <Link className={"welcome-info--card"} to="/editor" >
                    <ShieldIcon className={"welcome-info--icon"} />
                    <div className={"welcome-info--content"} >We protect your personal information. No question, no judgement
                     just fun with yamas! </div>
                    <div className={"welcome-info--arrow"} > &rarr;</div>

                </Link>
                <Link className={"welcome-info--card"} to="/about" >
                    <LibIcon className={"welcome-info--icon"} />
                    <div className={"welcome-info--content"} >Would you like to known more about this fantastic creature?
                    </div>
                    <div className={"welcome-info--arrow"} >&rarr;</div>
                </Link>
            </div>
        </div>);
    }
}

export default WelcomePanel;