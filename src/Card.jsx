const vendorColors = {
	VISA: "linear-gradient(45deg, rgb(5, 5, 13) 0%, rgba(0, 140, 177, 1) 35%, rgba(0, 29, 125, 1) 100%)",
	MASTERCARD:
		"linear-gradient(145deg, rgb(156, 7, 7 ) 25%, rgba(192, 41, 41) 65%, rgba(219, 77, 0) 100%)",
	["AMERICAN EXPRESS"]:
		"linear-gradient(145deg, rgb(53, 94, 59) 25%, rgb(0, 163, 108) 65%, rgb(64, 130, 109) 100%)",
	KLARNA:
		"linear-gradient(145deg, rgb(255, 151, 202 ) 25%, rgb(255, 78, 164 ) 65%, rgb(255, 0, 123 ) 100%)",
};

const formatCardNumber = (cardNumber) =>
	cardNumber
		.split("")
		.map((c, i) => ((i + 1) % 4 === 0 ? `${c} ` : c))
		.join("");

const formatValidThru = (validThru) => validThru.slice(2).replace("-", "/");

const Card = ({ vendor, validThru, cardholder, cardNumber }) => {
	return (
		<div
			className="container"
			style={{
				background: vendorColors[vendor] || "black",
			}}
		>
			<header>
				<span className="logo">
					<h5>{vendor}</h5>
				</span>
				<img src={"/public/chip.png"} alt="" className="chip" />
			</header>
			<div className="card-details">
				<div className="name-number">
					<h6>CARD NUMBER</h6>
					<h5 className="number">{formatCardNumber(cardNumber)}</h5>
				</div>
				<div className="valid-date">
					<div className="cardholder">
						<h6>CARDHOLDER</h6>
						<h5>{cardholder}</h5>
					</div>
					<div className="valid-thru">
						<h6>VALID THRU</h6>
						<h5>{formatValidThru(validThru)}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
