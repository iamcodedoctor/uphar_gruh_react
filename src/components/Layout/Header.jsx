import React from "react";
import { MdShoppingCart, MdPerson, MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Badge from 'react-bootstrap/Badge';

const Header = ({ isAuthenticated }) => {
    return (
        <>
            {["sm"].map((expand) => (
                <Navbar sticky="top" key={expand} bg="light" expand={expand}>
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
                                    <Link style={{position:'relative', width:'45px'}} className="nav-link" to="/cart">
                                        <MdShoppingCart style={{fontSize:'1.2rem'}} /> <Badge style={{position:'absolute', top:'0px', right:'0px'}} bg="danger">9</Badge>
                                    </Link>
                                    {isAuthenticated ? (
                                        <Link className="nav-link" to="/profile">
                                            <MdPerson style={{fontSize:'1.2rem'}} />
                                        </Link>
                                    ) : (
                                        <Link className="nav-link" to="/login">
                                            <MdLogin style={{fontSize:'1.2rem'}} />
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
