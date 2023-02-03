import React from "react";
import {Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../styles/Profile.css";
import {useDispatch, useSelector} from "react-redux";
import {logOutUser} from "../redux/actions/userActions";
import Loader from "../components/Loading/Loader";

const Profile = () => {

    const {user, loading} = useSelector(state=> state.auth);
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logOutUser());
    }
    
    return (
        <>
            {
                loading ? (<Loader />) : (
                    <section className="profile_main_section">
                        <Container className="profile_container">
                            <img
                                src={"https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=344&q=80"}
                                alt="profile pic"
                                className="profile_hoto"
                            />
                            <h2>{user.name}</h2>
                            {
                                user.role === "admin" && (
                                    <Link to="/admin/dashboard" variant="primary">
                                        <Button>Dashboard</Button>
                                    </Link>
                                )
                            }

                            <Link to="/myOrders">
                                <Button variant="danger">Orders</Button>
                            </Link>

                            <Button variant="dark" onClick={handleLogout}>Log Out</Button>
                        </Container>
                    </section>
                )
            }

        </>

    );
};

export default Profile;
