import React, { Component } from 'react';
// import Deck from './Deck';

export class Card extends Component {
    constructor(props) {
        super(props);
        this.point = props.point;
        this.suit = props.suit;
    }
    render() {
        let imgUrl = './cards/' + this.point + this.suit + '.png'
        return (
            <div>
                <h1>This is a card</h1>
                {/* <p>{this.point}{this.suit}</p> */}
                <img src={imgUrl} alt=""/>
            </div>
        )
    }
}

export default Card;
