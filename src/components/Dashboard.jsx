import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
	const { logout } = useContext(AuthContext);

	return (
			<div className="dashboard-card">
				<h1 className="dashboard-title">Welcome!</h1>
				<p className="dashboard-subtitle">
					You are now logged in. Enjoy your dashboard!
				</p>
				<button onClick={logout}>Logout</button>
			</div>
	);
}

export default Dashboard;
