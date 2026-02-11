import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import "./App.css"

function App() {
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<>
			{isLoggedIn ? <Dashboard /> : <LoginForm />}
		</>
	);
}

export default App;
