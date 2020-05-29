import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component, ...rest }) => {

    const user = JSON.parse(localStorage.getItem("user"));
    const isLogged = user ? user["status"] : false;

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLogged ? (
                    component
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }

        />
    )
}

export default PrivateRoute;