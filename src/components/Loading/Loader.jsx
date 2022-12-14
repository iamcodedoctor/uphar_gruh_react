import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <section
            style={{
                minHeight: "80vh",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Spinner
                style={{ height: "8rem", width: "8rem" }}
                animation="border"
                variant="dark"
            />
        </section>
    );
};

export default Loader;
