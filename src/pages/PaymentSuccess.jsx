import React from "react";
import { Button, Container } from "react-bootstrap";
import "../styles/Shipping.css";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
    return (
        <section className={"shipping"}>
            <Container className={"shipping_container"}>
                <h1 className="my-2">Order Placed</h1>
                <h6 className="my-2">
                    Order placed successfully, Click on the button below to know
                    your order Status.
                </h6>
                <Button className="my-2" variant="danger">
                    <Link style={{color:"white"}} to="/myOredrs">Check Status</Link>
                </Button>
            </Container>
        </section>
    );
};

export default PaymentSuccess;
