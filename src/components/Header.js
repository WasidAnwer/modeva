import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
//CSS Import
import "../assets/css/Header.css";
// Images Import
import mark1 from "../assets/images/users.png";
// Bootstrap Import
import { Container, Col, Row } from 'react-bootstrap'

function Header({ darkMode, toggleMode }) {

	return (
		<Container fluid className="header-container">
			<Row className="align-items-center">
				<Col xs="6">
					<div className="welcome-heading">
						<h2>WELCOME! ADMIN</h2>
					</div>
				</Col>
				<Col xs="6">
					<ul>
						<li>
							<button className="navi" onClick={toggleMode}>
								<i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"} ></i>
							</button>
						</li>
						<li>
							<figure>
								<img src={mark1} alt="" />
							</figure>
						</li>
						<li>
							<Link to="/adm/logout" className="navi">
								<span className="log-out">
									<i className="fa fa-sign-out"></i> Logout
								</span>
							</Link>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	)
}
export default Header;