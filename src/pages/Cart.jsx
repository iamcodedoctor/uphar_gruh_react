import React from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import CartItem from "../components/cart/CartItem";
import {Link} from "react-router-dom"

const Cart = () => {
    const increment = (item) => {
    };

    const decrement = (item) => {
    };

    return (
        <section>
            <main className="cart_main">
                <Container className="cart_container">
                    <Row className="py-4">
                        <Col className="cart_items_column" sm={12} lg={8}>
                            <CartItem
                                value={1}
                                title={"pizza"}
                                dishImage={
                                    "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                }
                                increment={increment(1)}
                                decrement={decrement(1)}
                            />
                            <CartItem
                                value={1}
                                title={"pizza"}
                                dishImage={
                                    "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                }
                                increment={increment(1)}
                                decrement={decrement(1)}
                            />
                            <CartItem
                                value={1}
                                title={"pizza"}
                                dishImage={
                                    "https://images.unsplash.com/photo-1602881917445-0b1ba001addf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                }
                                increment={increment(1)}
                                decrement={decrement(1)}
                            />
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
                                                <h5>$ 200</h5>
                                            </div>
                                            <div>
                                                <p>Tax</p>
                                                <h5>$ 36</h5>
                                            </div>
                                            <div>
                                                <p>Delivery Charges</p>
                                                <h5>$ 50</h5>
                                            </div>
                                            <div>
                                                <h4>Total</h4>
                                                <h4>$ {200 + 36 + 50}</h4>
                                            </div>
                                        </article>
                                    </div>
                                    <div className={'checkout_button_div'}>

                                        <Link to={"/shipping"}>
                                            <Button variant="danger">
                                                Checkout
                                            </Button>
                                        </Link>
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
