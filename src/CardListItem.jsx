import { useState } from "react";
import Card from "./Card";

const CardListItem = ({ cardData, index, listLength }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			key={index}
			style={{
				position: "absolute",
				zIndex: isHovered ? listLength : listLength - index,
				marginTop: 300 + index * 80,
				boxShadow: "rgb(0, 0, 0, 0.3) 2px 2px 8px 10px",
				borderRadius: "20px",
			}}
		>
			<Card
				color={cardData.color}
				vendor={cardData.vendor}
				expirationDate={cardData.expirationDate}
				cardholder={cardData.cardholder}
			/>
		</div>
	);
};

export default CardListItem;
