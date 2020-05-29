import React, { Component } from "react";
import "./AboutPanel.scss";
import Popup from "../../components/popup/Popup";
import BroomHead from "./BroomHead";
import JamaText from "./YamaText";


class AboutPanel extends Component {
    constructor() {
        super();
        this.state = {
            broomhead: false,
            yama: false
        }
    }

    showDetails(name) {
        this.setState({ [name]: !this.state[name] })
    }

    render() {
        return (<div className={"about"}>
            <div className={"about-box"}>

                <div className={"about-box--content"} name="broomhead" onClick={this.showDetails.bind(this, "broomhead")}>
                    <div className={"about-box--content__img1"}></div>
                    <div className={"about-box--content__title"}>CAPTAIN BROOMHEAD</div>

                </div>

                <div className={"about-box--content"} name="yama" onClick={this.showDetails.bind(this, "yama")}>
                    <div className={"about-box--content__title"}> SECRETS OF YAMA</div>
                    <div className={"about-box--content__img2"}></div>


                </div>
                {this.state.broomhead && <Popup title={"Captain Broomhead"}
                    onClick={this.showDetails.bind(this, "broomhead")}
                    children={<BroomHead />} />}
                {this.state.yama && <Popup title={"Myths and truth about Yama"} onClick={this.showDetails.bind(this, "yama")}
                    children={<JamaText />} />}
            </div>
        </div>);
    }
}

export default AboutPanel;