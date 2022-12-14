import React from "react";
import "../../styles/Founder.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Image} from "react-bootstrap";

const Founder = () => {
    return (
        <div className="main_div">
            <div>

            <Row>
                <Col sm={12} lg={4} className="photo_col">
                    <Image
                        className="founder_photo"
                        src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
                        alt="Founder Image"
                    />
                </Col>
                <Col sm={12} lg={8} className="text_col">
                    <h2 className="founder_name">Simmy Dicosta (Founder)</h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere numquam at aut neque enim aspernatur praesentium
                        quidem qui, commodi possimus doloremque maxime labore
                        modi explicabo debitis dolorum beatae fuga laboriosam,
                        expedita, repellat eius quaerat illum! Illo ullam ex
                        voluptatem sed?
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sunt aliquid est molestiae! Sequi totam quos ex
                        illum, pariatur voluptate nam. Lorem ipsum dolor, sit
                        amet consectetur adipisicing elit. Dolores, minima?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Soluta quibusdam recusandae nulla consequuntur
                        accusantium. Excepturi dolorem sed distinctio quas eum
                        neque ea rem incidunt, reprehenderit dignissimos nulla,
                        dolores quis rerum!
                    </p>
                </Col>
            </Row>
            </div>

        </div>
    );
};

export default Founder;
