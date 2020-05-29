import { useState, useEffect } from "react";


const useAuthInfo = () => {
    const initialUser = localStorage.getItem("user");
    const [logUser, setLogUser] = useState(initialUser);
    const auth = (value) => setLogUser(value);
    useEffect(
        () => {
            localStorage.setItem("user", JSON.stringify(logUser))
        }, [logUser]
    )
    return auth;
}

export default useAuthInfo;