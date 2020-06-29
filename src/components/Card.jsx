//--------------This component renders a card image-----------
import React, { Component } from 'react';

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
                <img src={imgUrl} alt="card"/>
            </div>
        )
    }
}

export default Card;
