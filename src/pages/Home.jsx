import React from "react";
import {Button, Container} from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

import "../styles/Home.css";
import Founder from "../components/home/Founder";
import Menu from "../components/home/Menu";

const Home = () => {
    return (
        <section className="home_main_section">
            <Carousel id="home">
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-70"
                        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Food Plaza</h3>
                        <p>Enjoy the taste of authentic food!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Authentic Dishes</h3>
                        <p>Enjoy authentic and tastey food Here.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Best Coffee</h3>
                        <p>Enjoy the best coffee in the world with us.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container
                className="mt-4 mb-4"
                style={{
                    display: "flex",
                    justifyContect: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <h1>Food Plaza...!</h1>
                <h4>Enjoy Authentic and tastey dishes.</h4>
                <h6>Click below for menu.</h6>
                <a href="#menu">
                    <Button variant="danger">Menu</Button>
                </a>
            </Container>
            <Founder/>
            <Menu/>
        </section>
    );
};

export default Home;
