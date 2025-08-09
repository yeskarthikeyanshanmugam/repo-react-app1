import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const Navbar = () => {
    const {user, login, logout} = useContext(AuthContext);

    return(
        <nav>
        {user? (
                <>
                <h1>Welcome to {user.name}</h1>
                <button onClick={logout}>Logout</button>
                </>
            ):( <button onClick={()=>login("KARTHIK")}>Login</button>)}
        </nav>
    )
}