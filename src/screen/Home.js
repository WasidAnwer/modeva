import React from "react";
import Main from "../screen/Main";
import "../assets/css/common.css";
import "../assets/css/Home.css";

import { Col, Container, Row } from "react-bootstrap";
function Home() {
    return (
        <>
            <Container className="modeva-container-body navigate" >
                <Row>
                    <Col lg="12">
                        <Main />
                    </Col>
                </Row>
            </Container>
            {/* </section > */}
        </>
    )
}
export default Home;