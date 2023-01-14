import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../styles/Menu.css";
import MenuCard from "./MenuCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Menu = ({ menuItems }) => {
    const addToCart = () => {
        console.log("addToCart function called");
    };

    return (
        <Container id="menu">
            <h1 className="menu_heading">Menu</h1>

            <Row style={{ margin: "2rem 0" }}>
                {menuItems && menuItems.map((item) => {
                    return (
                        <Col key={item._id} sm={12} md={6} lg={3} className="menu_div">
                            <MenuCard
                                title={item.title}
                                price={item.price}
                                dishImage={
                                    "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                }
                                handler={addToCart}
                            />
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default Menu;
