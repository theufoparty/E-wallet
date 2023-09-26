import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CardList from "./CardList";
import AddCard from "./AddCard";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/cards" element={<CardList />} />
				<Route path="/addcard" element={<AddCard />} />
			</Routes>
			<div className="navigation">
				<nav>
					<Link to="/cards">Card List</Link>

					<Link to="/addcard">Add New Card</Link>
				</nav>
			</div>
		</Router>
	);
}

export default App;
