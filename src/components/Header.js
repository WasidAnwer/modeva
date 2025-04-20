import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import mark from "../assets/img/modevaLog.png";
import mark1 from "../assets/img/users.png";
import "../assets/css/Header.css";

function Header({ darkMode, toggleMode }) {
	const isAdminLoggedIn = localStorage.getItem("adminToken");
	return (
		<main>
			<header className={darkMode ? "dark-mode" : " "} >
				<div className="container-fluid">
					<div className="row">
						<div className="head-left col-2">
							<div className="logo">
								<figure>
									<img src={mark} alt="" />
								</figure>
							</div>
						</div>
						<div className="head-right col-10">
							<ul className="row">
								<li>
									<button className="navi" onClick={toggleMode}>
										<i className="fa-solid fa-moon moon"></i>
									</button>
								</li>
								<li>
									<a className="navi" href="/">
										<figure>
											<img src={mark1} alt="" />
										</figure>
									</a>
								</li>
								<li>
									{isAdminLoggedIn ? (
										<Link to="/adm/logout" className="navi">
											<span className="log-out">
												<i className="fa fa-sign-out"></i> Logout
											</span>
										</Link>
									) : (
										<Link to="/adm/Login" className="navi">
											<span className="log-in">
												<i className="fa fa-sign-in"></i> Login
											</span>
										</Link>
									)}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		</main>
	)
}
export default Header;