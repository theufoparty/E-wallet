import { useState } from "react";
import Card from "./Card";
import CardListItem from "./CardListItem";

const CardList = ({ cards }) => {
	const [activeCardID, setActiveCardID] = useState(1);

	const activeCard = cards.find((card) => card.id === activeCardID);
	const inactiveCards = cards.filter((card) => card.id !== activeCardID);

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
					/>
				</div>
				{inactiveCards.map((cardData, index) => {
					return (
						<CardListItem
							key={index}
							onClick={() => setActiveCardID(cardData.id)}
							cardData={cardData}
							index={index}
							listLength={inactiveCards.length}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default CardList;
