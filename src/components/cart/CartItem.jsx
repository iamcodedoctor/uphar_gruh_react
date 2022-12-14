import React from "react";
import {Button, Card} from "react-bootstrap";
import "../../styles/Cart.css";
import Form from "react-bootstrap/Form";

const CartItem = ({value, title, dishImage, increment, decrement}) => {
    return (
        <Card className="custom_cart_card">
            <img alt="dishImage" className="card_image" variant="top" src={dishImage}/>
            <Card.Body className="card_body">
                <Card.Title>{title}</Card.Title>
                <div className="cart_form">
                    <div className="cart_counter">
                        <Button variant="danger" onClick={decrement}>-</Button>
                        <Form.Group
                            className="mx-2"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Control type="number" readOnly={true} value={value} className='counter_input'/>
                        </Form.Group>
                        <Button variant="danger" onClick={increment}>+</Button>
                    </div>

                </div>
            </Card.Body>
        </Card>
    );
};

export default CartItem;
