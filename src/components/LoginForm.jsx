import { useState, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";

const mockUser = {
	username: "admin",
	password: "1234",
};

 function LoginForm() {
	const { login, isLoggedIn } = useContext(AuthContext); 
	

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const usernameRef = useRef(null);

	useEffect(() => {
		if (!isLoggedIn) {
			setUsername("");
			setPassword("");
			usernameRef.current?.focus(); 
		}
	}, [isLoggedIn]);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (username === mockUser.username && password === mockUser.password) {
			login();
			setUsername("");
			setPassword("");
		} else {
			alert("Wrong credentials");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="login-form">
			<h2 className="form-title">Sign In</h2>

			<div className="form-group">
				<label htmlFor="username">Username</label>
				<input
					id="username"
					type="text"
					placeholder="Enter your username - admin"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					ref={usernameRef} 
				/>
			</div>

			<div className="form-group">
				<label htmlFor="password">Password</label>
				<input
					id="password"
					type="password"
					placeholder="Enter your password - 1234"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>

			<button type="submit">Login</button>
		</form>
	);
}
export default LoginForm