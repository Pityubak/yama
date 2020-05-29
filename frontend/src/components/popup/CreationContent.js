import React, { Component } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import Axapi from "../../context/Axapi";
import "./Popup.scss";

class CreationContent extends Component {

    constructor() {
        super();
        this.state = {
            username: JSON.parse(localStorage.getItem("user"))["username"],
            password: JSON.parse(localStorage.getItem("user"))["password"],
            name: "",
            color: "",
            hasThreeEyes: ""
        }

    }

    updateYama() {
        Axapi(`yamas/${this.props.id}`, {
            method: "PUT",
            auth: {
                username: this.state.username,
                password: this.state.password
            },
            data: {
                name: this.state.name === "" ? this.props.name : this.state.name,
                color: this.state.color === "" ? this.props.color : this.state.color,
                hasThreeEyes: this.state.hasThreeEyes === "" ? this.props.hasThreeEyes : this.state.hasThreeEyes
            }
        }).then(() => {
            this.props.onClick();
            this.props.refresh();
        })
            .catch(e => {
                console.log(e);
                console.log(this.state.password);
            })
    }



    addYama() {
        const data={
            name: this.state.name,
            color: this.state.color,
            hasThreeEyes: this.state.hasThreeEyes
        }
        Axapi("yamas", {
            method: "POST",
            auth: {
                username: this.state.username,
                password: this.state.password
            },
            data: data
        }).then(() => {
            this.props.onClick();
            this.props.refresh();
           
        })
            .catch(e => {
                console.log(e);
                console.log(this.state.password);
            })
    }


    correctAction() {
        console.log(this.props.flag);
        if (this.props.flag === 'ADD') {
            this.addYama();
        } else if (this.props.flag === 'UPDATE') {
            this.updateYama();
        }
    }

    onChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }


    render() {
        return (
            <div className={"content"}>
                <div className={"content-upper"}>
                    <Input placeholder={"Name"} type={"text"} className={"content-input"}
                        name="name" value={this.props.name} onChange={this.onChange.bind(this)} />
                    <Input placeholder={"Color"} className={"content-input"}
                        name="color" type={"text"} value={this.props.color} onChange={this.onChange.bind(this)} />
                    <Input placeholder={"HasThreeEyes"} className={"content-input"}
                        name="hasThreeEyes" type={"text"} value={this.props.hasThreeEyes} onChange={this.onChange.bind(this)} />

                </div>
                <div className={"content-bottom"}>
                    <Button text={this.props.btntext} onClick={this.correctAction.bind(this)} className={"content-btn"} />
                    <Button text={"Cancel"} onClick={this.props.onClick} className={"content-btn"} />
                </div>

            </div>

        )
    }
}

export default CreationContent;