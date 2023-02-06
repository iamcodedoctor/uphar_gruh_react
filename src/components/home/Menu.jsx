import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../styles/Menu.css";
import MenuCard from "./MenuCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers/cartReducer";

const Menu = ({ menuItems }) => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <Container id="menu">
            <h1 className="menu_heading">Menu</h1>

            <Row style={{ margin: "2rem 0" }}>
                {menuItems &&
                    menuItems.map((item) => {
                        return (
                            <Col
                                key={item._id}
                                sm={12}
                                md={6}
                                lg={3}
                                className="menu_div"
                            >
                                <MenuCard
                                    title={item.title}
                                    price={item.price}
                                    dishImage={item.photo}
                                    handler={() => handleAddToCart(item)}
                                />
                            </Col>
                        );
                    })}
            </Row>
        </Container>
    );
};

export default Menu;
