import React from "react";
import {Button, Container, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../styles/Table.css";

const Orders = () => {
    return (
        <section className="page_main_section">
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
                        <th>User</th>
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
                        <th>Garry</th>
                        <td>
                            <Link to="/orderDetail/:id">
                                <Button variant="danger">Details</Button>
                            </Link>

                            <Button className="mx-2" variant="danger">
                                Process
                            </Button>
                        </td>
                    </tr>
                    {/* This is seperator  */}
                    <tr>
                        <td>j23asd23kl1j23</td>
                        <td>Procressing</td>
                        <td>2</td>
                        <td>₹{120}</td>
                        <td>COD</td>
                        <th>Garry</th>
                        <td>
                            <Link to="/orderDetail/:id">
                                <Button variant="danger">Details</Button>
                            </Link>

                            <Button className="mx-2" variant="danger">
                                Process
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>j23asd23kl1j23</td>
                        <td>Procressing</td>
                        <td>2</td>
                        <td>₹{120}</td>
                        <td>COD</td>
                        <th>Garry</th>
                        <td>
                            <Link to="/orderDetail/:id">
                                <Button variant="danger">Details</Button>
                            </Link>

                            <Button className="mx-2" variant="danger">
                                Process
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>j23asd23kl1j23</td>
                        <td>Procressing</td>
                        <td>2</td>
                        <td>₹{120}</td>
                        <td>COD</td>
                        <th>Garry</th>
                        <td>
                            <Link to="/orderDetail/:id">
                                <Button variant="danger">Details</Button>
                            </Link>

                            <Button className="mx-2" variant="danger">
                                Process
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>j23asd23kl1j23</td>
                        <td>Procressing</td>
                        <td>2</td>
                        <td>₹{120}</td>
                        <td>COD</td>
                        <th>Garry</th>
                        <td>
                            <Link to="/orderDetail/:id">
                                <Button variant="danger">Details</Button>
                            </Link>

                            <Button className="mx-2" variant="danger">
                                Process
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </Container>
        </section>
    );
};

export default Orders;
