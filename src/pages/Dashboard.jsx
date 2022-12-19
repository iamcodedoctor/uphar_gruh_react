import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Loader from "../components/Loading/Loader.jsx";
import "../styles/Dashboard.css";
import {Link} from "react-router-dom";

const Dashboard = () => {
    const laoding = false;
    return (
        <section className="section_main">
            {laoding ? (
                <Loader/>
            ) : (
                <Container className="dashboard_container">
                    <Row className="cards_row">
                        <Col className="col" xs={12} md={3}>
                            <Card
                                bg="dark"
                                text="light"
                                style={{width: "10rem", height: "10rem"}}
                                className="mb-2 special_card"
                            >
                                <Card.Body className="dashboard_card_body">
                                    <Card.Title>{"Users"}</Card.Title>
                                    <h3>{122}</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col" xs={12} md={3}>
                            <Card
                                bg="dark"
                                text="light"
                                style={{width: "10rem", height: "10rem"}}
                                className="mb-2 special_card"
                            >
                                <Card.Body className="dashboard_card_body">
                                    <Card.Title>{"Orders"}</Card.Title>
                                    <h3>{622}</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="col" xs={12} md={3}>
                            <Card
                                bg="dark"
                                text="light"
                                style={{width: "10rem", height: "10rem"}}
                                className="mb-2 special_card"
                            >
                                <Card.Body className="dashboard_card_body">
                                    <Card.Title>{"Income"}</Card.Title>
                                    <h3>{78871}</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <div className="my-4">
                        <div className="buttons-col">
                            <Link to="/admin/orders">
                                <Button
                                    style={{width: "10rem"}}
                                    variant="dark"
                                >
                                    View Orders
                                </Button>
                            </Link>
                            <Link to="/admin/users">
                                <Button
                                    style={{width: "10rem"}}
                                    variant="dark"
                                >
                                    View Users
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            )}
        </section>
    );
};

export default Dashboard;
