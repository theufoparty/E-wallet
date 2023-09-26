import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CardList from "./CardList";
import AddCard from "./AddCard";
import { useState } from "react";
import { INITIAL_CARDS } from "./constants";

function App() {
	const [cards, setCards] = useState(INITIAL_CARDS);

	const addCard = (card) => {
		const newCard = { ...card, id: cards.length + 1 };
		setCards([...cards, newCard]);
	};
	return (
		<Router>
			<Routes>
				<Route path="/cards" element={<CardList cards={cards} />} />
				<Route path="/addcard" element={<AddCard addCard={addCard} />} />
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
