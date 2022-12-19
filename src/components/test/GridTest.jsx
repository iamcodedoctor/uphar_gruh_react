import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GridTest = () => {
    const data = [
        {
            title: "hello",
            text: "sdjkfhlkasjdfh laskdjfh lkdjfhas alskdjf  asdkljfh  asdkljfhs dkjsd l asdkjhsd  asdlkjfhsdkj df  alsdkjfhsd f ",
        },
        {
            title: "hello",
            text: "sdjkfhlkasjdfh laskdjfh lkdjfhas alskdjf  asdkljfh  asdkljfhs dkjsd l asdkjhsd  asdlkjfhsdkj df  alsdkjfhsd f ",
        },
        {
            title: "hello",
            text: "sdjkfhlkasjdfh laskdjfh lkdjfhas alskdjf  asdkljfh  asdkljfhs dkjsd l asdkjhsd  asdlkjfhsdkj df  alsdkjfhsd f ",
        },
        {
            title: "hello",
            text: "sdjkfhlkasjdfh laskdjfh lkdjfhas alskdjf  asdkljfh  asdkljfhs dkjsd l asdkjhsd  asdlkjfhsdkj df  alsdkjfhsd f ",
        },
        {
            title: "hello",
            text: "sdjkfhlkasjdfh laskdjfh lkdjfhas alskdjf  asdkljfh  asdkljfhs dkjsd l asdkjhsd  asdlkjfhsdkj df  alsdkjfhsd f ",
        },
        {
            title: "hello",
            text: "sdjkfhlkasjdfh laskdjfh lkdjfhas alskdjf  asdkljfh  asdkljfhs dkjsd l asdkjhsd  asdlkjfhsdkj df  alsdkjfhsd f ",
        },
        {
            title: "hello",
            text: "sdjkfhlkasjdfh laskdjfh lkdjfhas alskdjf  asdkljfh  asdkljfhs dkjsd l asdkjhsd  asdlkjfhsdkj df  alsdkjfhsd f ",
        },
        {
            title: "hello",
            text: "sdjkfhlkasjdfh laskdjfh lkdjfhas alskdjf  asdkljfh  asdkljfhs dkjsd l asdkjhsd  asdlkjfhsdkj df  alsdkjfhsd f ",
        },
        {
            title: "hello",
            text: "sdjkfhlkasjdfh laskdjfh lkdjfhas alskdjf  asdkljfh  asdkljfhs dkjsd l asdkjhsd  asdlkjfhsdkj df  alsdkjfhsd f ",
        },
    ];

    return (
        <>
            <Container>
                <Row>
                    {data.map((d) => {
                        return (
                            <Col
                                xs={12}
                                md={6}
                                lg={4}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <Card
                                    className="my-4"
                                    style={{ width: "18rem" }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src="https://images.unsplash.com/photo-1630423029172-fd5e39ae6dfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    />
                                    <Card.Body>
                                        <Card.Title>{d.title}</Card.Title>
                                        <Card.Text>{d.text}</Card.Text>
                                        <Button variant="primary">
                                            Go somewhere
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
};

export default GridTest;
