//--------------This component renders a card image-----------
import React, { Component } from "react";
import { connect } from "react-redux";
//Class component to create and display card
export class Card extends Component {
	constructor(props) {
		super(props);
		this.point = props.point;
		this.suit = props.suit;
		this.state = {
			message: "Your Card:",
		};
	}
	render() {
		let imgUrl =
			this.props.player === 1
				? this.props.p1Card.point + this.props.p1Card.suit
				: this.props.p2Card.point + this.props.p2Card.suit;
		//We use the status to set the back image of the card.
		//If the description is "game is loaded" we will make the imgURL be the alien_back.png
		const status = this.props.description === "game is loaded";
		return (
			<div>
				<p>{this.state.message}</p>
				<img
					src={`./cards/${status ? "alien_back" : imgUrl}.png`}
					alt='Playing Card'
				/>
			</div>
		);
	}
}

const mapStateToProps = ({ p1Card, p2Card, description }) => {
	return {
		p1Card,
		p2Card,
		description,
	};
};
export default connect(mapStateToProps)(Card);