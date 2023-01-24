import React, { useEffect } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartItem from "../components/cart/CartItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrementItemQuantity, getCartTotal, incrementItemQuantity } from "../redux/reducers/cartReducer";

const Cart = () => {
    const { dishes, total } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCheckout = () => {
        navigate('/shipping')
    }
    const increment = (id) => {
        dispatch(incrementItemQuantity(id))
    }
    const decrement = (id) => {
        dispatch(decrementItemQuantity(id))
    }

    useEffect(()=> {
        dispatch(getCartTotal());
    }, [dishes])

    return (
        <section>
            <main className="cart_main">
                <Container className="cart_container">
                    <Row className="py-4">
                        <Col className="cart_items_column" sm={12} lg={8}>
                            {!dishes?.length ? (
                                <h1>No Items in cart</h1>
                            ) : (
                                dishes.map((dish) => {
                                    return (
                                        <CartItem
                                        price={dish.price}
                                            key={dish._id}
                                            id={dish._id}
                                            value={dish.quantity}
                                            title={dish.title}
                                            dishImage={
                                                "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                            }
                                            increment={() => increment(dish._id)}
                                            decrement={() => decrement(dish._id)}
                                        />
                                    );
                                })
                            )}
                        </Col>
                        <Col className="cart_totals_column" sm={12} lg={4}>
                            <Card className="totals_card">
                                <Card.Body>
                                    <Card.Title className={"totals_card_title"}>
                                        <h2> Total</h2>
                                    </Card.Title>
                                    <div>
                                        <article>
                                            <div>
                                                <p>Subtotal</p>
                                                <h5>₹ {total.subTotal}</h5>
                                            </div>
                                            <div>
                                                <p>Delivery Charges</p>
                                                <h5>₹ {dishes.length === 0 ? 0 : total.delivery}</h5>
                                            </div>
                                            <div>
                                                <h4>Total</h4>
                                                <h4>₹ {dishes.length === 0 ? 0 : total.finalTotal}</h4>
                                            </div>
                                        </article>
                                    </div>
                                    <div className={"checkout_button_div"}>
                                        
                                            <Button variant="danger" disabled={dishes.length === 0 ? true : false} onClick={handleCheckout}>
                                                Checkout
                                            </Button>
                                        
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        </section>
    );
};

export default Cart;
