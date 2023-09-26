import Card from "./Card";
import CardListItem from "./CardListItem";

const CardList = () => {
	const activeCard = {
		color: "#040D12",
		vendor: "VISA",
		expirationDate: "25/07",
		cardholder: "NELL ANDERSSON",
	};
	const inactiveCards = [
		{
			color: "#183D3D",
			vendor: "VISA",
			expirationDate: "25/07",
			cardholder: "NELL ANDERSSON",
		},

		{
			color: "#5C8374",
			vendor: "VISA",
			expirationDate: "25/07",
			cardholder: "NELL ANDERSSON",
		},

		{
			color: "#93B1A6",
			vendor: "VISA",
			expirationDate: "25/07",
			cardholder: "NELL ANDERSSON",
		},
	];

	return (
		<div>
			<div className="heading">E-WALLET</div>
			<div className="subheading">ACTIVE CARD</div>
			<div className="card-container">
				<div className="card-active">
					<Card
						color={activeCard.color}
						vendor={activeCard.vendor}
						expirationDate={activeCard.expirationDate}
						cardholder={activeCard.cardholder}
					/>
				</div>
				{inactiveCards.map((cardData, index) => {
					return (
						<CardListItem
							key={index}
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
