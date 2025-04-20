import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";

function Markup() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Hide preloader after 2 seconds
        }, 2000);

        return () => clearTimeout(timer); // Cleanup timeout on unmount
    }, []);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    const toggleMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <>
            <Header darkMode={darkMode} toggleMode={toggleMode} />

            {loading ? (
                <div className="preloader">
                    <div className="spinner"></div>
                </div>
            ) : (
                <>
                    <Nav isCollapsed={isSidebarOpen} setIsCollapsed={setIsSidebarOpen} />
                    <section className={`modeva ${isSidebarOpen ? "open" : "closed"}`}>
                        <Outlet /> {/* Dynamic routing content */}
                    </section>
                </>
            )}
        </>
    );
}

export default Markup;
