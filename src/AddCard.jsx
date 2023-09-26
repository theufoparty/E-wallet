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
			<div className="heading">ADD CARD</div>
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
						<label htmlFor="validThru">VALID TRHU</label>
						<input
							type="text"
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
						<option value="Visa">Visa</option>
						<option value="Mastercard">Mastercard</option>
						<option value="American Express">American Express</option>
					</select>
				</div>
				<button type="submit">ADD</button>
			</form>
		</div>
	);
};

export default AddCard;
