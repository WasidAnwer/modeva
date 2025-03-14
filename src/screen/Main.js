import React, { useState } from "react";
import "../assets/css/main.css";
import Header from "../components/Header";
function Main() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };
    return (
        <>
            <Header darkMode={darkMode} toggleMode={toggleMode} />
            <div className="markup-home">

            </div>
        </>
    )
} export default Main;