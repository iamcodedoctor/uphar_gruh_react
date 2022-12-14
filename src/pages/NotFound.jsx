import React from "react";
import { Button, Container } from "react-bootstrap";
import "../styles/NotFound.css"
import {Link} from "react-router-dom"

const NotFound = () => {
    return (
        <section className="nf_main">
            <Container className="py-4">
                <h1>Ooopppss..!!</h1>
                <h3>404</h3>
                <h5>
                    Page Not Found, Click below to navigate back to home page
                </h5>
                <Link to="/">
                <Button variant="danger">Home Page</Button>
                </Link>
            </Container>
        </section>
    );
};

export default NotFound;
