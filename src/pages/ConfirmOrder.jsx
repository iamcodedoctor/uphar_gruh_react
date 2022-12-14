import React from "react";
import "../styles/Shipping.css";
import { Button, Container, Form } from "react-bootstrap";

const ConfirmOrder = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <section className={"shipping"}>
            <main>
                <Container className={"shipping_container"}>
                    <h2 className="form_heading">Confirm Order</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Select Payment Method</Form.Label>
                            <Form.Check
                                name="paymentMethod"
                                type="radio"
                                label="Cash On Delivery"
                                id="default-radio"
                            />
                            <Form.Check
                                name="paymentMethod"
                                type="radio"
                                label="Online"
                                id="default-radio"
                            />
                        </Form.Group>

                        <Button
                            onClick={handleSubmit}
                            variant="danger"
                            type="submit"
                            className="form_submit_button"
                        >
                            Place Order
                        </Button>
                    </Form>
                </Container>
            </main>
        </section>
    );
};

export default ConfirmOrder;
