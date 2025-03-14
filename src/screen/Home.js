import React, { useState } from "react";
import Nav from "../components/Nav";
// import Main from "../screen/Main";
import Add from "../components/products/Add";
import "../assets/css/common.css";
import "../assets/css/Home.css";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";

function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };
    return (
        <>
            <Header darkMode={darkMode} toggleMode={toggleMode} />
            <Nav isCollapsed={isSidebarOpen} setIsCollapsed={setIsSidebarOpen} />
            <section className={`modeva ${isSidebarOpen ? "open" : "closed"}`} >
                <Container className="modeva-container-body navigate" >
                    <Row>
                        <Col lg="12">
                            <Add />
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}
export default Home;