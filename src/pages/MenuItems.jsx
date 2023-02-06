import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { deleteItem, fetchMenuItems } from "../Services/itemService";
import "../styles/Menu.css";

const MenuItems = () => {
    const [menuItems, setMenuItems] = useState();
    const navigate = useNavigate();
    const getMenuItems = async () => {
        const response = await fetchMenuItems();
        setMenuItems(response.data);
    };

    const handleAdd = () => {
        navigate("/admin/createMenuItem");
    };

    const handleDelete = async (id) => {
        try {
            const response = await deleteItem(id);
            if (response.success === true) {
                const newItems = menuItems.filter((item) => item._id !== id);
                setMenuItems(newItems);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMenuItems();
    }, []);

    return (
        <Container id="menu">
            <h1 className="menu_heading mt-4">Menu Items</h1>
            <div className="my-2 mx-4">
                <Button onClick={handleAdd} variant="success">
                    Add New Menu Item
                </Button>
            </div>
            <Row style={{ margin: "2rem 0" }}>
                {menuItems?.map((item) => {
                    return (
                        <Col
                            key={item._id}
                            sm={12}
                            md={6}
                            lg={3}
                            className="menu_div"
                        >
                            <Card
                                className="menu_card_item"
                                style={{ width: "18rem" }}
                            >
                                <Card.Img
                                    className="card_img"
                                    variant="top"
                                    src={item.photo}
                                />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>Price : {item.price}</Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() =>
                                            navigate(
                                                `/admin/editMenuItem/${item._id}`
                                            )
                                        }
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        onClick={() => handleDelete(item._id)}
                                        className="mx-2"
                                        variant="danger"
                                    >
                                        Delete
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default MenuItems;
