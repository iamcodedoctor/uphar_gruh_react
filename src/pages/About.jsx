import React from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import "../styles/About.css";

const About = () => {
    return (
        <section className="about_div">
            <Container>
                <Row>
                    <Col sm={12} lg={4} className="photo_col">
                        <Image
                            className="person_photo"
                            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                            alt="Founder Image"
                        />
                    </Col>
                    <Col sm={12} lg={8} className="text_col">
                        <h2 className="founder_name">
                            Simmy Dicosta (Founder)
                        </h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere numquam at aut neque enim aspernatur
                            praesentium quidem qui, commodi possimus doloremque
                            maxime labore modi explicabo debitis dolorum beatae
                            fuga laboriosam, expedita, repellat eius quaerat
                            illum! Illo ullam ex voluptatem sed?
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Sunt aliquid est molestiae! Sequi totam quos
                            ex illum, pariatur voluptate nam. Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Dolores,
                            minima?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Soluta quibusdam recusandae nulla consequuntur
                            accusantium. Excepturi dolorem sed distinctio quas
                            eum neque ea rem incidunt, reprehenderit dignissimos
                            nulla, dolores quis rerum!
                        </p>
                    </Col>
                </Row>
                <Row>

                    <Col sm={12} lg={8} className="text_col">
                        <h2 className="founder_name">
                            Simmy Dicosta (Founder)
                        </h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere numquam at aut neque enim aspernatur
                            praesentium quidem qui, commodi possimus doloremque
                            maxime labore modi explicabo debitis dolorum beatae
                            fuga laboriosam, expedita, repellat eius quaerat
                            illum! Illo ullam ex voluptatem sed?
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Sunt aliquid est molestiae! Sequi totam quos
                            ex illum, pariatur voluptate nam. Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Dolores,
                            minima?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Soluta quibusdam recusandae nulla consequuntur
                            accusantium. Excepturi dolorem sed distinctio quas
                            eum neque ea rem incidunt, reprehenderit dignissimos
                            nulla, dolores quis rerum!
                        </p>
                    </Col>
                    <Col sm={12} lg={4} className="photo_col">
                        <Image
                            className="person_photo"
                            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                            alt="Founder Image"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} lg={4} className="photo_col">
                        <Image
                            className="person_photo"
                            src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                            alt="Founder Image"
                        />
                    </Col>
                    <Col sm={12} lg={8} className="text_col">
                        <h2 className="founder_name">
                            Simmy Dicosta (Founder)
                        </h2>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facere numquam at aut neque enim aspernatur
                            praesentium quidem qui, commodi possimus doloremque
                            maxime labore modi explicabo debitis dolorum beatae
                            fuga laboriosam, expedita, repellat eius quaerat
                            illum! Illo ullam ex voluptatem sed?
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Sunt aliquid est molestiae! Sequi totam quos
                            ex illum, pariatur voluptate nam. Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Dolores,
                            minima?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Soluta quibusdam recusandae nulla consequuntur
                            accusantium. Excepturi dolorem sed distinctio quas
                            eum neque ea rem incidunt, reprehenderit dignissimos
                            nulla, dolores quis rerum!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
