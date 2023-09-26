import { useState } from "react";
import Card from "./Card";

const CardListItem = ({ cardData, index, listLength, onClick }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onClick={onClick}
			key={index}
			style={{
				position: "absolute",
				zIndex: isHovered ? listLength : listLength - index,
				marginTop: 300 + index * 80,
				borderRadius: "20px",
			}}
		>
			<Card
				color={cardData.color}
				vendor={cardData.vendor}
				validThru={cardData.validThru}
				cardholder={cardData.cardholder}
			/>
		</div>
	);
};

export default CardListItem;
