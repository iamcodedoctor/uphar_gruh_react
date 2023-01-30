import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../Services/orderService";
import "../styles/OrderDetails.css";

const OrderDetails = () => {
    const { id } = useParams();
    const [orderDetails, setOrderDetails] = useState();
    useEffect(() => {
        const fetchOrderDetails = async () => {
            const response = await getOrderDetails(id);
            setOrderDetails(response.data);
        };
        fetchOrderDetails();
    }, []);
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
                                <b>House Number</b> :
                                {orderDetails?.shippingInfo?.houseNo} <br></br>
                                <b>City</b> :
                                {orderDetails?.shippingInfo?.city} <br></br>
                                <b>State</b> :
                                {orderDetails?.shippingInfo?.state} <br></br>
                                <b>Country</b> :
                                {orderDetails?.shippingInfo?.country} <br></br>
                                <b>Pin Code</b> :
                                {orderDetails?.shippingInfo?.pinCode} <br></br>
                            </p>
                            <h4>Contact</h4>
                            <p>
                                <b>Name</b> :{orderDetails?.userId?.name}
                            </p>
                            <p>
                                <b>Phone</b> :{orderDetails?.shippingInfo?.phoneNo}
                            </p>
                            <h4>Status</h4>
                            <p>
                                <b>Order Status</b> :{orderDetails?.orderStatus}
                            </p>
                            <p>
                                <b>Placed At</b> :{orderDetails?.createdAt}
                            </p>
                            <p>
                                <b>Delivered At</b> :{orderDetails?.deliveredAt || "-"}
                            </p>
                            <h4>Payment</h4>
                            <p>
                                <b>Payment Method</b> :{orderDetails?.paymentMethod}
                            </p>
                            
                            <p>
                                <b>Paid At</b> :{orderDetails?.paidAt.slice(0,10)}
                            </p>
                            <h4>Amount</h4>
                            <p>
                                <b>Delivery Charges</b> :{orderDetails?.deliveryCharges}
                            </p>
                            <p>
                                <b>Total</b> :{orderDetails?.totalAmount / 100}
                            </p>
                        </article>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    );
};

export default OrderDetails;
