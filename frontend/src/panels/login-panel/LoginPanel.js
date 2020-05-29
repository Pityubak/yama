import React from "react";
import Input from '../../components/input/Input';
import Button from "../../components/button/Button";
import Axapi from "../../context/Axapi";
import Error from "../../components/error/Error";
import { useHistory, useLocation } from "react-router-dom";
import useAuthInfo from "../../hooks/AuthInfo";

import "./LoginPanel.scss";
import LockIcon from "../../components/icon/LockIcon";
import useForceUpdate from "../../hooks/Refresh";


const LoginPanel = () => {


    let state = {
        username: "user",
        password: "pass",
    };

    const props = {
        user: {
            status: false,
            username: "",
            password: ""
        }
    }
    let history = useHistory();
    let location = useLocation();

    let auth = useAuthInfo(props);

    const setState = (name, value) => {
        state[name] = value;
    }

    const onChange = event => {
        let name = event.target.name;
        let value = event.target.value;
        setState(name, value);
    }
    const forceUpdate = useForceUpdate();

    const onClick = async event => {
        event.preventDefault();
        
        await Axapi("auth", {
            method: "post",
            auth: {
                username: state.username,
                password: state.password
            }
        })
            .then(repsonse => {
                if (repsonse.status === 200) {
                    console.log("MSS: "+state.hasError);
                    localStorage.setItem("hasError", false);
                    let { from } = location.state || { from: { pathname: "/" } };
                    auth({
                        status: true,
                        username: state.username,
                        password: state.password
                    }
                    );
                    history.push({
                        pathname: from.pathname,
                    });
                }
            })
            .catch(er => {
                localStorage.setItem("hasError", true);
                forceUpdate();
            });

    }


    return (
        <div className={"login"}>
            <form onSubmit={onClick} className={"login-form"}>
                <h2 className={"login-form--title"}>Login to access Yama World</h2>
                <LockIcon className={"login-form--icon"} width={"48"} height={"48"} />
                <Input type="text" placeholder="Username" name="username"
                    className={"login-form--input"}
                    onChange={onChange} value={state.username} />
                <Input type="password" placeholder="Password" name="password"
                    className={"login-form--input"} onChange={onChange} value={state.password} />
                <Button type="submit" text="Login" className={"login-form--btn"} />
                {JSON.parse(localStorage.getItem("hasError")) && <Error className={"login-form--error"} ></Error>}
            </form>

        </div>
    )

}

export default LoginPanel;