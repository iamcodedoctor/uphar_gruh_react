import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Profile.css";

const Profile = () => {
    return (
        <section className="profile_main_section">
            <Container className="profile_container">
                <img
                    src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                    alt="profile pic"
                    className="profile_hoto"
                />
                <h2>Alicent Roberts</h2>

                <Link to="/admin/dashboard" variant="primary">
                    <Button>Dashboard</Button>
                </Link>
                <Link to="/myOrders">
                    <Button variant="danger">Orders</Button>
                </Link>

                <Button variant="dark">Log Out</Button>
            </Container>
        </section>
    );
};

export default Profile;
