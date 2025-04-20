import React from "react";
import Main from "../screen/Main";
import "../assets/css/common.css";
import "../assets/css/Home.css";

import { Col, Container, Row } from "react-bootstrap";
function Home() {

    // const [isSidebarOpen] = useState(true);
    return (
        <>

            {/* <section className={`modeva ${isSidebarOpen ? "open" : "closed"}`} > */}

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