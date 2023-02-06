import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Profile.css";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../redux/actions/userActions";
import Loader from "../components/Loading/Loader";

const Profile = () => {
    const { user, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logOutUser());
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <section className="profile_main_section">
                    <Container className="profile_container">
                        <img
                            src={user.photo}
                            alt="profile pic"
                            className="profile_hoto"
                        />
                        <h2>{user.name}</h2>
                        {user.role === "admin" && (
                            <Link to="/admin/dashboard" variant="primary">
                                <Button>Dashboard</Button>
                            </Link>
                        )}

                        <Link to="/myOrders">
                            <Button variant="danger">Orders</Button>
                        </Link>

                        <Button variant="dark" onClick={handleLogout}>
                            Log Out
                        </Button>
                    </Container>
                </section>
            )}
        </>
    );
};

export default Profile;
