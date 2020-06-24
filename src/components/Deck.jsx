import React, { Component } from 'react';
import Card from './Card';

export class Deck extends Component {
    constructor(props) {
        super(props);

        let suits = ['C', 'D', 'H', 'S'];
        let points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        let shuffledDeck = []

        this.state = {
            cards: []
        }
        for(var i = 0; i < suits.length; i++) {
            for(var j = 0; j < points.length; j++) {
              var card = {point: points[j], suit: suits[i]};
              this.state.cards.push(card);
            }
          }
        // console.log(this.state)
        this.shuffledDeck = this.state.cards.sort(() => Math.random() - 0.5);
        // console.log(this.state)
    }
    
    render() {
        // console.log(this.state)
        const cardArray = this.shuffledDeck.map((card, index) => {
            return <Card key={index} {...card} />
        })
        // console.log(cardArray)
        return (
            <div>
               {cardArray}
            </div>
        )
    }
}

export default Deck
