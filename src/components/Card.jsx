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
                {/* <h1 onClick={this.handleClick}>This is a card</h1> */}
                {/* <p>{this.point}{this.suit}</p> */}
                <img src={imgUrl} alt=""/>
            </div>
        )
    }
}

export default Card;
