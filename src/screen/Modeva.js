import React, { useState } from "react";
import { Outlet } from "react-router-dom";
//Import Componentes
import Header from "../components/Header";
import Nav from "../components/Nav";
//Import CSS
import "../assets/css/Modeva.css";

function Modeva() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(true);
	const [darkMode, setDarkMode] = useState(false);

	const toggleMode = () => {
		setDarkMode(!darkMode);
		document.body.classList.toggle("dark-mode");
	};
	return (
		<>
			<header className={`header ${darkMode ? "dark-mode" : ""} ${isSidebarOpen ? "open" : "closed"}`}>
				<Header darkMode={darkMode} toggleMode={toggleMode} />
			</header>
			<nav>
				<Nav isCollapsed={isSidebarOpen} setIsCollapsed={setIsSidebarOpen} />
			</nav>
			<section className={`modeva ${isSidebarOpen ? "open" : "closed"}`}>
				<Outlet />
			</section>
		</>
	)
}
export default Modeva;