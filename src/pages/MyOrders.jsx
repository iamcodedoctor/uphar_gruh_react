import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import "../styles/Table.css";
import "../styles/MyOrders.css";
import { Link } from "react-router-dom";

const MyOrders = () => {
    return (
        <section className="my_orders_section">
            <h2 className="py-4 text-center">My Orders</h2>
            <Container className="table_container">
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
                        <tr>
                            <td>j23asd23kl1j23</td>
                            <td>Procressing</td>
                            <td>2</td>
                            <td>₹{120}</td>
                            <td>COD</td>
                            <td>
                                <Link to="/orderDetail/:id">
                                    <Button variant="danger">Details</Button>
                                </Link>
                            </td>
                        </tr>
                        {/* This is seperator  */}
                        <tr>
                            <td>j23asd23kl1j23</td>
                            <td>Procressing</td>
                            <td>2</td>
                            <td>₹{120}</td>
                            <td>COD</td>
                            <td>
                                <Link to="/orderDetail/:id">
                                    <Button variant="danger">Details</Button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>j23asd23kl1j23</td>
                            <td>Procressing</td>
                            <td>2</td>
                            <td>₹{120}</td>
                            <td>COD</td>
                            <td>
                                <Link to="/orderDetail/:id">
                                    <Button variant="danger">Details</Button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>j23asd23kl1j23</td>
                            <td>Procressing</td>
                            <td>2</td>
                            <td>₹{120}</td>
                            <td>COD</td>
                            <td>
                                <Link to="/orderDetail/:id">
                                    <Button variant="danger">Details</Button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>j23asd23kl1j23</td>
                            <td>Procressing</td>
                            <td>2</td>
                            <td>₹{120}</td>
                            <td>COD</td>
                            <td>
                                <Link to="/orderDetail/:id">
                                    <Button variant="danger">Details</Button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>j23asd23kl1j23</td>
                            <td>Procressing</td>
                            <td>2</td>
                            <td>₹{120}</td>
                            <td>COD</td>
                            <td>
                                <Link to="/orderDetail/:id">
                                    <Button variant="danger">Details</Button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default MyOrders;
