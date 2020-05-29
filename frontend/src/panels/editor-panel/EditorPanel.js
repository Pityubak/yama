import React, { Component } from "react";
import Axapi from "../../context/Axapi";
import Base from "../../components/list/List";
import ListItem from "../../components/listItem/ListItem";

import "./EditorPanel.scss";
import Popup from "../../components/popup/Popup";
import CreationContent from "../../components/popup/CreationContent";
import ViewContent from "../../components/popup/ViewContent";
import DeleteContent from "../../components/popup/DeleteContent";

import AddIcon from "../../components/icon/AddIcon";
import UpdateIcon from "../../components/icon/UpdateIcon";
import ViewIcon from "../../components/icon/ViewIcon";
import DeleteIcon from "../../components/icon/DeleteIcon";
import UserIcon from "../../components/icon/UserIcon";
import UnauthorizedContent from "../../components/popup/UnauthorizedContent";
import Button from "../../components/button/Button";
import { withRouter } from 'react-router-dom';


class EditorPanel extends Component {

    constructor() {
        super();
        this.state = {
            yamaList: [],
            popup: false,
            title: "",
            username: JSON.parse(localStorage.getItem("user"))["username"],
            password: JSON.parse(localStorage.getItem("user"))["password"],
            content: {}
        }
        this.getAllYama = this.getAllYama.bind(this);
        this.getAllYama();

    }

    getAllYama() {

        Axapi.get("yamas", {
            auth: {
                username: this.state.username,
                password: this.state.password
            }

        }).then((response) => {
            this.setState({ yamaList: response.data._embedded.yamaList });
        }).catch(er => {
            console.log(this.state.username);
        })
    }
    deleteYamaById(event) {

        Axapi.delete(`yamas/${event}`, {
            auth: {
                username: this.state.username,
                password: this.state.password
            },

        }).then(() => {
            this.setState({ yamaList: this.state.yamaList.filter(list => list.id !== event) });
            this.setModal();
        }).catch(() => {
            this.setState({ content: <UnauthorizedContent onClick={this.setModal.bind(this)} /> })
        })
    }


    setPopupContent(param, element) {
        this.setState({ popup: !this.state.popup });
        const yama = element;
        if (param === "update") {
            this.setState({
                content: <CreationContent id={yama.id} name={yama.name} btntext={"Update Yama"} refresh={this, this.getAllYama}
                    color={yama.color} hasThreeEyes={yama.hasThreeEyes} flag="UPDATE" onClick={this.setModal.bind(this)} />
            });
            this.setState({ title: "Update Yama" });
        } else if (param === "add") {
            this.setState({
                content: <CreationContent btntext={"Add Yama"} flag="ADD"
                    refresh={this, this.getAllYama} onClick={this.setModal.bind(this)} />
            });
            this.setState({ title: "Add Yama" });
        } else if (param === "delete") {
            this.setState({
                content:
                    <DeleteContent cancel={this.setModal.bind(this)} delete={this.deleteYamaById.bind(this, yama.id)} />
            });
            this.setState({ title: "Delete Yama" });
        } else {
            this.setState({ title: "View Yama" });
            this.setState({ content: <ViewContent hasThreeEyes={yama.hasThreeEyes} currentColor={yama.color} /> });
        }


    }
    setModal() {
        this.setState({ popup: !this.state.popup });
    }

    logOut() {
        const user = JSON.parse(localStorage.getItem("user"));
        user["status"] = false;
        localStorage.setItem("user", JSON.stringify(user));
        this.props.history.push("/editor");

    }


    render() {

        return (

            <div className={"editor"} >
                <Base className={"header"}>

                    <div className={"header-panel"}>
                        <h3>You are logged in,{this.state.username}</h3>
                        <UserIcon className={"editor-header--icon"} />
                    </div>
                    <Button className={"header-btn"} text={"Logout"} onClick={this.logOut.bind(this)} />
                </Base>
                <Base className={"editor-list"}>
                    <div className={"editor-header"}>
                        <div className={"editor-header--attr"}>NAME</div>
                        <div className={"editor-header--attr"}>COLOR</div>
                        <div className={"editor-header--attr"}>THREE EYE</div>
                        <button className={"editor-header--btn editor-header--attr"}
                            onClick={this.setPopupContent.bind(this, "add")}
                        ><AddIcon className={"editor-icon"} />
                        </button>

                    </div>
                    {this.state.yamaList.map(element => (
                        <ListItem className={"editor-list--item"} key={element.id} >
                            <div className={"editor-list--item__attr"}>{element.name}</div>
                            <div className={"editor-list--item__attr"}>{element.color}</div>
                            <div className={"editor-list--item__attr"}>{element.hasThreeEyes ? "true" : "false"}</div>
                            <button className={"item-icon"} text="Update Yama" onClick={this.setPopupContent.bind(this, "update", element)} >
                                <UpdateIcon className={"editor-icon"} /> </button>
                            <button className={"item-icon"} text="Delete Yama" onClick={this.setPopupContent.bind(this, "delete", element)} >
                                <DeleteIcon className={"editor-icon"} /></button>
                            <button className={"item-icon"} text="View Yama" onClick={this.setPopupContent.bind(this, "view", element)} >
                                <ViewIcon className={"editor-icon"} /></button>
                        </ListItem>

                    ))}
                </Base>
                {this.state.popup && <Popup children={this.state.content}
                    title={this.state.title} onClick={this.setModal.bind(this)} />}
            </div >
        );
    }
}

export default withRouter(EditorPanel);