import React, {useState} from "react";
import {Button, Container} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import "../styles/Contact.css";
import {useNavigate} from 'react-router-dom'

const Contact = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '', email: '', message: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data);
        toast.success("Thank You for response.:)")
        navigate('/')
    };

    return (<div className="contact_section">
        <Container className="form_container">
            <h1 className="form_heading">Contact Us</h1>
            <Form>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        onChange={(e) => setData({...data, name: e.target.value})}
                        value={data.name}
                        type="text"
                        placeholder="Your Name"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setData({...data, email: e.target.value})}
                        value={data.email}
                        type="email"
                        placeholder="name@example.com"
                    />
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        onChange={(e) => setData({...data, message: e.target.value})}
                        value={data.message}
                        as="textarea"
                        placeholder="Enter Message here...."
                        rows={5}
                    />
                </Form.Group>

                <Button
                    onClick={handleSubmit}
                    className="form_submit_button"
                    variant="danger"
                    size="lg"
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </Container>
    </div>);
};

export default Contact;
