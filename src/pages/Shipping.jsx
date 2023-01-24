import React, { useState } from "react";
import "../styles/Shipping.css";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { createOredr } from "../Services/orderService";

const Shipping = () => {
    const { dishes } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        houseNumber: 0,
        city: "",
        country: "India",
        state: "",
        pinCode: "",
        phoneNumber: "",
        paymentMethod: "COD",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = { ...formData, dishes };
            const response = await createOredr(data);
            console.log(response.data);
            if(response.success === true) {
                navigate('/paymentSuccess');
            }
        } catch (error) {
            console.log(error);
        }
    };

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
                                value={formData.houseNumber}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        houseNumber: e.target.value,
                                    })
                                }
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
                                value={formData.city}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        city: e.target.value,
                                    })
                                }
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Country</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={formData.country}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        country: e.target.value,
                                    })
                                }
                            >
                                <option>Country</option>
                                <option value="India">India</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>State</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={formData.state}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        state: e.target.value,
                                    })
                                }
                            >
                                <option>State</option>
                                <option value="Maharashtra">Maharashtra</option>
                                <option value="Gujarat">Gujarat</option>
                                <option value="Delhi">Delhi</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control
                                value={formData.pinCode}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        pinCode: e.target.value,
                                    })
                                }
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
                                value={formData.phoneNumber}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        phoneNumber: e.target.value,
                                    })
                                }
                                type="bumber"
                                placeholder="Enter Phone Number"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Payment Method</Form.Label>
                            <Form.Select
                                aria-label="Default select example"
                                value={formData.paymentMethod}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        paymentMethod: e.target.value,
                                    })
                                }
                            >
                                <option>Payment Method</option>
                                <option value="COD">Cash On Delivery</option>
                                <option value="Online">Online</option>
                            </Form.Select>
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

export default Shipping;
