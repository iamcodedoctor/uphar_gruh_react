import React from "react";
import { Button, Container } from "react-bootstrap";
import "../styles/Shipping.css";
import { Link } from "react-router-dom";


const PaymentFailure = () => {
    
    return (
        <section className={"shipping"}>
            <Container className={"shipping_container"}>
                <h1 className="my-2">OOOPPPSSSS..!!!!</h1>
                <h4 className="my-2">Payment Failed</h4>
                <h6 className="my-2">Some error occured in your payment.</h6>
                <Button className="my-2" variant="danger">
                    <Link style={{ color: "white" }} to="/cart">
                        Try Again
                    </Link>
                </Button>
            </Container>
        </section>
    );
};

export default PaymentFailure;
