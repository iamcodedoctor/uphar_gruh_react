import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import "../styles/Table.css";
import "../styles/MyOrders.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getMyOrders } from "../Services/orderService";
import { useState } from "react";

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState();
    useEffect(() => {
        const fetchMyOrders = async () => {
            const response = await getMyOrders();
            setMyOrders(response.data);
        };
        fetchMyOrders();
    }, []);
    return (
        <section className="my_orders_section">
            <h2 className="py-4 text-center">My Orders</h2>
            <Container className="table_container">
                {!myOrders.length ? (
                    <h3 style={{textAlign:'center'}}>You have not placed any orders yet.</h3>
                ) : (
                    <Table
                        className="mb-4 main_table"
                        striped
                        bordered
                        hover
                        size="sm"
                    >
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Status</th>
                                <th>Item Qty</th>
                                <th>Amount</th>
                                <th>Payment Method</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myOrders?.map((order) => {
                                return (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{order.orderStatus}</td>
                                        <td>{order.items.length}</td>
                                        <td>₹{order.totalAmount / 100}</td>
                                        <td>{order.paymentMethod}</td>
                                        <td>
                                            <Link to="/orderDetail/:id">
                                                <Button variant="danger">
                                                    Details
                                                </Button>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                )}
            </Container>
        </section>
    );
};

export default MyOrders;
