import { useState } from "react";

const AddCard = () => {
	const [cardInfo, setCardInfo] = useState({
		vendor: "",
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
	};

	return (
		<div>
			<h1>Add Card</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="cardNumber">Card Number:</label>
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
					<label htmlFor="cardholder">Cardholder:</label>
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
					<label htmlFor="validThru">Valid Thru</label>
					<input
						type="text"
						id="validThru"
						name="validThru"
						value={cardInfo.validThru}
						onChange={handleInputChange}
						required
					/>

					<label htmlFor="ccv">CCV:</label>
					<input
						type="text"
						id="ccv"
						name="ccv"
						value={cardInfo.ccv}
						onChange={handleInputChange}
						required
					/>
				</div>

				<div>
					<label htmlFor="vendor">Vendor:</label>
					<select
						id="vendor"
						name="vendor"
						value={cardInfo.vendor}
						onChange={handleInputChange}
						required
					>
						<option value="">Select a vendor</option>
						<option value="Visa">Visa</option>
						<option value="Mastercard">Mastercard</option>
						<option value="American Express">American Express</option>
					</select>
				</div>
				<button type="submit">Save Card</button>
			</form>
		</div>
	);
};

export default AddCard;
