import React from "react";
import "../styles/Shipping.css";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Shipping = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const navigate = useNavigate()

    return (
        <section className={"shipping"}>
            <main>
                <Container className={"shipping_container"}>
                    <h2 className="form_heading">Shipping Form</h2>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>House Number</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter House Number"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter City"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Country</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>Country</option>

                                <option value="1">India</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>State</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option>State</option>
                                <option value="1">Maharashtra</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter Pin Code"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="bumber"
                                placeholder="Enter Phone Number"
                            />
                        </Form.Group>
                        <Button
                            onClick={handleSubmit}
                            variant="danger"
                            type="submit"
                            className="form_submit_button"
                        >
                            Confirm Order
                        </Button>
                    </Form>
                </Container>
            </main>
        </section>
    );
};

export default Shipping;
