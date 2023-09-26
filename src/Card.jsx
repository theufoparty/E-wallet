const Card = ({ color, vendor, expirationDate, cardholder }) => {
	return (
		<div className="container" style={{ backgroundColor: color }}>
			<header>
				<span className="logo">
					<h5>{vendor}</h5>
				</span>
				<img src={"/public/chip.png"} alt="" className="chip" />
			</header>
			<div className="card-details">
				<div className="name-number">
					<h6>CARD NUMBER</h6>
					<h5 className="number">8050 5040 2030 3020</h5>
				</div>
				<div className="valid-date">
					<div className="cardholder">
						<h6>CARDHOLDER</h6>
						<h5>{cardholder}</h5>
					</div>
					<div className="valid-thru">
						<h6>VALID THRU</h6>
						<h5>{expirationDate}</h5>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
