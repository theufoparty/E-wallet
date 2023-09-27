import { useState } from "react";
import Card from "./Card";

const CardListItem = ({ cardData, index, listLength, onClick, activeCardID }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onClick}
			key={index}
			style={{
				zIndex: listLength - index,
				marginTop: -120,
				position: "relative",
				transition: "transform 1s",
				cursor: activeCardID === cardData.id ? "default" : "pointer",
				transform: `translateX(${isHovered ? 150 : 0}px)`,
				borderRadius: "20px",
				filter: `brightness(${activeCardID === cardData.id ? "50%" : "100%"})`,
			}}
		>
			<Card
				vendor={cardData.vendor}
				cardNumber={cardData.cardNumber}
				validThru={cardData.validThru}
				cardholder={cardData.cardholder}
			/>
		</div>
	);
};

export default CardListItem;
