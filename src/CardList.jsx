import { useState } from "react";
import Card from "./Card";
import CardListItem from "./CardListItem";
import { Link, useNavigate } from "react-router-dom";

const CardList = ({ cards, removeCard }) => {
	const [activeCardID, setActiveCardID] = useState(cards[0].id);
	const navigate = useNavigate();
	if (!activeCardID) {
		navigate("/addcard");
	}
	const activeCard = cards.find((card) => card.id === activeCardID);

	return (
		<div>
			<div className="heading">E-WALLET</div>
			<div className="subheading">ACTIVE CARD</div>
			<div className="card-container">
				<div className="card-active">
					<Card
						color={activeCard.color}
						vendor={activeCard.vendor}
						validThru={activeCard.validThru}
						cardholder={activeCard.cardholder}
						cardNumber={activeCard.cardNumber}
					/>
					<div style={{ marginLeft: "auto", width: "fit-content", paddingTop: 6 }}>
						<button
							style={{
								padding: "4px 8px",
								background: "none",
								border: "1px solid black",
								borderRadius: 4,
								cursor: "pointer",
							}}
							onClick={() => {
								removeCard(activeCardID);
								const inactiveCards = cards.filter((c) => c.id !== activeCardID);
								const newActiveCard = inactiveCards[0];
								if (newActiveCard) {
									setActiveCardID(newActiveCard.id);
								} else {
									navigate("/addcard");
								}
							}}
						>
							remove card
						</button>
					</div>
				</div>
				{cards.map((cardData, index) => {
					return (
						<CardListItem
							key={index}
							onClick={() => setActiveCardID(cardData.id)}
							cardData={cardData}
							index={index}
							activeCardID={activeCardID}
							listLength={cards.length}
						/>
					);
				})}
			</div>
			<div className="navigation">
				<div>
					<nav>
						<Link className="add-button" to="/addcard">
							Add Card
						</Link>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default CardList;
