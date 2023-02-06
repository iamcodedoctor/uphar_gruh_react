import React from "react";
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { createMenuItems } from "../Services/itemService";
import "../styles/Menu.css";

const CreateMenuItem = () => {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        photo: "",
    });
    const navigate = useNavigate()
    const handleSubmit = async () => {
        try {
            const response = await createMenuItems(formData);
            console.log(response.data);
            if(response.success === true) {
                navigate('/admin/menuItems')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container id="menu" style={{maxWidth:'720px'}}>
            <h1 className="menu_heading mt-4">Create Menu Item</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formMenuTitle">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Item Name"
                        value={formData.title}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                title: e.target.value,
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMenuPrice">
                    <Form.Label>Item Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter Item Price"
                        value={formData.price}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                price: e.target.value,
                            })
                        }
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Item Photo Url"
                        value={formData.photo}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                photo: e.target.value,
                            })
                        }
                    />
                </Form.Group>
                <Button onClick={handleSubmit} className="mb-4 " variant="success">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default CreateMenuItem;
