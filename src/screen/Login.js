import React, { useState } from "react";
import "../assets/css/login.css";
import logo from "../assets/img/modevaLog.png";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(""); // Clear previous errors

		if (!username || !password) {
			setError("Username and Password are required!");
			return;
		}

		setLoading(true);
		// Simulate authentication process (Replace this with API call)
		setTimeout(() => {
			setLoading(false);
			alert(`Welcome, ${username}!`);
			// Redirect or save login session
		}, 1500);
	};

	return (
		<section className="modeva-login">
			<div className="content">
				<form onSubmit={handleSubmit}>
					<h4><i className="fa fa-user"></i> Please enter your login details.</h4>
					<figure><img className="logo" src={logo} alt="Modeva Logo" /></figure>

					{error && <p className="error">{error}</p>}

					<ul>
						<li>
							<label htmlFor="username">Username</label>
							<input
								type="text"
								name="username"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								aria-label="Enter your username"
							/>
						</li>
						<li>
							<label htmlFor="password">Password</label>
							<input
								type="password"
								name="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								aria-label="Enter your password"
							/>
						</li>
					</ul>

					<div className="markup-btn">
						<button type="submit" disabled={loading}>
							{loading ? "Logging in..." : "Login"}
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}

export default Login;
