import React, { Component } from 'react'

export class Card extends Component {
    constructor(point, suit) {
        super(point, suit)
        this.point = point;
        this.suit = suit;
    }

    render() {
        return (
            <div>
                <h1>This is a card</h1>
                <button>Generate a card</button>
            </div>
        )
    }
}

export default Card;
