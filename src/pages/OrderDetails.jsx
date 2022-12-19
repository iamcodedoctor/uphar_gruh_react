import React from "react";
import {Card, Container} from "react-bootstrap";
import "../styles/OrderDetails.css"

const OrderDetails = () => {
    return (
        <section className="main_section">
            <Container className="py-4">

                <Card className="text-center">
                    <Card.Header>
                        <h2>Order Details</h2>
                    </Card.Header>
                    <Card.Body>
                        <article>
                            <h4>Shipping</h4>
                            <p>
                                <b>Address</b> :{"asd asda asd asd asdasdasd"}
                            </p>
                            <h4>Contact</h4>
                            <p>
                                <b>Name</b> :{"Simran"}
                            </p>
                            <p>
                                <b>Phone</b> :{9835466884}
                            </p>
                            <h4>Status</h4>
                            <p>
                                <b>Order Status</b> :{"Delivered"}
                            </p>
                            <p>
                                <b>Placed At</b> :{"10-11-2023"}
                            </p>
                            <p>
                                <b>Delivered At</b> :{"10-11-2023"}
                            </p>
                            <h4>Payment</h4>
                            <p>
                                <b>Payment Method</b> :{"Online"}
                            </p>
                            <p>
                                <b>Payment reference</b> :{"786asjdajsdg65"}
                            </p>
                            <p>
                                <b>Paid At</b> :{"10-11-2023"}
                            </p>
                            <h4>Amount</h4>
                            <p>
                                <b>Items Total</b> : ₹{820}
                            </p>
                            <p>
                                <b>Shipping Charges</b> :{200}
                            </p>
                            <p>
                                <b>Tax</b> :{200}
                            </p>
                            <p>
                                <b>Total</b> :{1020}
                            </p>
                        </article>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    );
};

export default OrderDetails;
