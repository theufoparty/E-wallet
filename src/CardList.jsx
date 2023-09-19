import React, { useState } from "react";

const CardList = () => {
	return (
		<div>
			<div className="heading">E-WALLET</div>
			<div className="subheading">ACTIVE CARD</div>
			<div className="card-container">
				<div className="container card-active">
					<header>
						<span className="logo">
							<h5>Master Card</h5>
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
								<h5>Nell Andersson</h5>
							</div>
							<div className="valid-thru">
								<h6>VALID THRU</h6>
								<h5>05/28</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="container card-2">
					<header>
						<span className="logo">
							<h5>Master Card</h5>
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
								<h5>Nell Andersson</h5>
							</div>
							<div className="valid-thru">
								<h6>VALID THRU</h6>
								<h5>05/28</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="container card-3">
					<header>
						<span className="logo">
							<h5>Master Card</h5>
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
								<h5>Nell Andersson</h5>
							</div>
							<div className="valid-thru">
								<h6>VALID THRU</h6>
								<h5>05/28</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="container card-4">
					<header>
						<span className="logo">
							<h5>Master Card</h5>
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
								<h5>Nell Andersson</h5>
							</div>
							<div className="valid-thru">
								<h6>VALID THRU</h6>
								<h5>05/28</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardList;
