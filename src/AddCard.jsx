import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "./Card";

const validateCardNumber = (cardNumber) => {
	return !isNaN(cardNumber) && cardNumber.length <= 16;
};

const validateCCV = (ccv) => {
	return !isNaN(ccv) && ccv.length <= 3;
};

const getCurrentMonth = () => new Date().toISOString().split("T")[0].slice(0, 7);

const AddCard = ({ currentNumberOfCards, addCard }) => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState("");
	const [cardInfo, setCardInfo] = useState({
		vendor: "",
		cardNumber: "",
		cardholder: "",
		validThru: "",
		ccv: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		const invalidCardNumber = name === "cardNumber" && !validateCardNumber(value);
		const invalidCCV = name === "ccv" && !validateCCV(value);
		if (invalidCardNumber || invalidCCV) {
			return;
		}
		setCardInfo({
			...cardInfo,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentNumberOfCards > 3) {
			setErrorMessage(
				"You've reached your current maximum allowed number of cards (4) please remove a card or purchase the premium extended E-wallet subscription to add more cards"
			);
		} else {
			addCard(cardInfo);
			navigate("/cards");
		}
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

			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="cardNumber">CARD NUMBER</label>
						<input
							type="text"
							pattern="[0-9]{16}"
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
								min={getCurrentMonth()}
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
								pattern="[0-9]{3}"
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
					{!!errorMessage.length && (
						<div>
							<p style={{ color: "red" }}>{errorMessage}</p>
							<Link to="/cards">Go to your card list</Link>
						</div>
					)}
					<button className="button" type="submit">
						ADD
					</button>
				</form>
			</div>
		</div>
	);
};

export default AddCard;
