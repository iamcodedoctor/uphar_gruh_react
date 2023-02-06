import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../styles/Menu.css";

const MenuCard = ({ title, price, dishImage, handler }) => {
    return (
        <Card className="menu_card_item" style={{ width: "18rem" }}>
            <Card.Img className="card_img" variant="top" src={dishImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Price : ₹ {price}</Card.Text>
                <Button variant="danger" onClick={handler}>
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default MenuCard;
