import React from "react";
import {Button} from "react-bootstrap";
import {FcGoogle} from "react-icons/fc";
import "../styles/Login.css";
import {serverUrl} from "../redux/store";

const Login = () => {
    return (
        <section className="login_section">
            <Button className="login_button" variant="outline-dark" onClick={()=> {
                window.open(`${serverUrl}/googleLogin`, "_self")
            }}>
                <FcGoogle/> Login With Google
            </Button>
        </section>
    );
};

export default Login;
