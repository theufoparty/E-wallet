import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

	const removeCard = (cardId) => {
		const newCards = cards.filter((card) => card.id !== cardId);
		setCards(newCards);
	};

	return (
		<Router>
			<Routes>
				<Route path="/cards" element={<CardList cards={cards} removeCard={removeCard} />} />
				<Route
					path="/addcard"
					element={<AddCard currentNumberOfCards={cards.length} addCard={addCard} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
