import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import mark from "../assets/img/modevaLog.png";
import mark1 from "../assets/img/users.png";
import "../assets/css/Header.css";

function Header({ darkMode, toggleMode }) {

	return (
		<div className={darkMode ? "dark-mode" : " "} >
			<div className="container-fluid">
				<div className="row">
					<div className="head-left col-4">
						{/* <div className="logo">
							<figure>
								<img src={mark} alt="" />
							</figure>
						</div> */}
						<div className="welcome-heading">
							<h2 className="text-dark">Welcome! Admin</h2>
						</div>
					</div>
					<div className="head-right col-8">
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
								<Link to="/adm/logout" className="navi">
									<span className="log-out">
										<i className="fa fa-sign-out"></i> Logout
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Header;