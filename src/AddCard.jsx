import { useState } from "react";
import Card from "./Card";

const AddCard = ({ addCard }) => {
	const [cardInfo, setCardInfo] = useState({
		vendor: "VISA",
		cardNumber: "",
		cardholder: "",
		validThru: "",
		ccv: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setCardInfo({
			...cardInfo,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addCard(cardInfo);
	};

	return (
		<div>
			<div className="heading">ADD CARD</div>
			<div className="subheading">NEW CARD</div>

			<div style={{ display: "flex", justifyContent: "center" }}>
				<Card
					cardholder={cardInfo.cardholder}
					vendor={cardInfo.vendor}
					validThru={cardInfo.validThru}
					ccv={cardInfo.ccv}
					cardNumber={cardInfo.cardNumber}
				/>
			</div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="cardNumber">CARD NUMBER</label>
					<input
						type="text"
						id="cardNumber"
						name="cardNumber"
						value={cardInfo.cardNumber}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div>
					<label htmlFor="cardholder">CARDHOLDER</label>
					<input
						type="text"
						id="cardholder"
						name="cardholder"
						value={cardInfo.cardholder}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="flex">
					<div className="flex-row">
						<label htmlFor="validThru">VALID THRU</label>
						<input
							type="month"
							id="validThru"
							name="validThru"
							value={cardInfo.validThru}
							onChange={handleInputChange}
							required
						/>
					</div>
					<div className="flex-row">
						<label htmlFor="ccv">CCV</label>
						<input
							type="text"
							id="ccv"
							name="ccv"
							value={cardInfo.ccv}
							onChange={handleInputChange}
							required
						/>
					</div>
				</div>

				<div>
					<label htmlFor="vendor">VENDOR</label>
					<select
						id="vendor"
						name="vendor"
						value={cardInfo.vendor}
						onChange={handleInputChange}
						required
					>
						<option value="">SELECT A VENDOR</option>
						<option value="VISA">Visa</option>
						<option value="MASTERCARD">Mastercard</option>
						<option value="AMERICAN EXPRESS">American Express</option>
						<option value="KLARNA">Klarna</option>
					</select>
				</div>
				<button type="submit">ADD</button>
			</form>
		</div>
	);
};

export default AddCard;
