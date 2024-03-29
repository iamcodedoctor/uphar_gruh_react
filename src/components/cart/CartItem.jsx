import React from "react";
import {Button, Card} from "react-bootstrap";
import "../../styles/Cart.css";
import Form from "react-bootstrap/Form";
import {useDispatch} from "react-redux";
import {removeItemFromCart} from "../../redux/reducers/cartReducer";
import {TiDelete} from "react-icons/ti"

const CartItem = ({id, value, title, dishImage, increment, decrement, price}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(removeItemFromCart(id));
    }

    return (
        <Card className="custom_cart_card">
            <img
                alt="dishImage"
                className="card_image"
                variant="top"
                src={dishImage}
            />
            <Card.Body className="card_body">
                <div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>₹{price}</Card.Text>
                    <div className="cart_form">
                        <div className="cart_counter">
                            <Button variant="danger" onClick={decrement} disabled={value === 1 ? true : false}>
                                -
                            </Button>
                            <Form.Group
                                className="mx-2"

                            >
                                <Form.Control
                                    type="text"
                                    readOnly={true}
                                    value={value}
                                    className="counter_input"
                                />
                            </Form.Group>
                            <Button variant="danger" onClick={increment}>
                                +
                            </Button>
                        </div>
                    </div>
                </div>
                <Button variant="danger" onClick={handleDelete}> <TiDelete style={{fontSize: '1.6rem'}}/></Button>
            </Card.Body>
        </Card>
    );
};

export default CartItem;
