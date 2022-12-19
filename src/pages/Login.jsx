import React from "react";
import {Button} from "react-bootstrap";
import {FcGoogle} from "react-icons/fc";
import "../styles/Login.css";

const Login = () => {
    return (
        <section className="login_section">
            <Button className="login_button" variant="outline-dark">
                <FcGoogle/> Login With Google
            </Button>
        </section>
    );
};

export default Login;
