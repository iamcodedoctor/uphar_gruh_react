import React from "react";
import { MdShoppingCart, MdPerson, MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = ({ isAuthenticated = false }) => {
    return (
        <>
            {["sm"].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand}>
                    <Container fluid>
                        <Navbar.Brand>
                            <Link className="nav-link" to="/">
                                <h2>Food Plaza</h2>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Food Plaza
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                    <Link className="nav-link" to="/contact">
                                        Contact
                                    </Link>
                                    <Link className="nav-link" to="/about">
                                        About
                                    </Link>
                                    <Link className="nav-link" to="/cart">
                                        <MdShoppingCart />
                                    </Link>
                                    {isAuthenticated ? (
                                        <Link className="nav-link" to="/me">
                                            <MdPerson />
                                        </Link>
                                    ) : (
                                        <Link className="nav-link" to="/login">
                                            <MdLogin />
                                        </Link>
                                    )}
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
};

export default Header;
