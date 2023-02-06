import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { getAllOrders, processOrder } from "../Services/orderService";
import "../styles/Table.css";
import MyPagination from "../components/MyPagination";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();
    const fetchOrders = async () => {
        try {
            const response = await getAllOrders({ page: page - 1, limit: 10 });
            setOrders(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleProcess = async (id) => {
        try {
            const response = await processOrder(id);
            if (response.data.success === true) {
                const newOrders = orders?.data?.map((order) => {
                    if (order._id === id) {
                        if (order.orderStatus === "Shipped") {
                            order.orderStatus = "Delivered";
                        } else if (order.orderStatus === "Preparing") {
                            order.orderStatus = "Shipped";
                        }
                    }
                    return order;
                });
                setOrders({ ...orders , data: newOrders });
            }
        } catch (error) {
            console.log(error);
        }
    };

    const totalPages = Math.ceil(orders?.documentCount / 10);

    useEffect(() => {
        fetchOrders();
    }, [page]);
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
                        {orders?.data?.map((order) => {
                            return (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.orderStatus}</td>
                                    <td>{order.items.length}</td>
                                    <td>₹{order.totalAmount / 100}</td>
                                    <td>{order.paymentMethod}</td>
                                    <th>{order.userId.name}</th>
                                    <td>
                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                navigate(
                                                    `/orderDetails/${order._id}`
                                                )
                                            }
                                        >
                                            Details
                                        </Button>

                                        <Button
                                            disabled={
                                                order.orderStatus ===
                                                "Delivered"
                                                    ? true
                                                    : false
                                            }
                                            className="mx-2"
                                            variant="danger"
                                            onClick={() =>
                                                handleProcess(order._id)
                                            }
                                        >
                                            Process
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Container>
            <MyPagination
                page={page}
                setPage={setPage}
                totalPages={totalPages}
            />
        </section>
    );
};

export default Orders;
