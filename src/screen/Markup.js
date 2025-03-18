import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";


function Markup() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };
    return (
        <>
            <header className={`${isSidebarOpen ? "open" : "closed"}`}>
                <Header darkMode={darkMode} toggleMode={toggleMode} />
            </header>
            <nav>
                <Nav isCollapsed={isSidebarOpen} setIsCollapsed={setIsSidebarOpen} />
            </nav>
            <section className={`modeva ${isSidebarOpen ? "open" : "closed"}`}>
                <Outlet /> {/* This will load Home, AddProduct, or ProductList */}
            </section>
        </>
    )
}
export default Markup;