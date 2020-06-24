//-----This component makes a shuffled Deck and
import React, { Component } from 'react';
import Card from './Card';

export class Deck extends Component {
    constructor(props) {
        super(props);

        let suits = ['C', 'D', 'H', 'S'];
        let points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        this.state = {
            cards: [],
            playerOneCards: [],
            playerTwoCards: [],
        }
        for(var i = 0; i < suits.length; i++) {
            for(var j = 0; j < points.length; j++) {
              var card = {point: points[j], suit: suits[i]};
              this.state.cards.push(card);
            }
          }
         console.log(this.state)
//-----Shuffle the card Array------
        this.state.cards.sort(() => Math.random() - 0.5);
        this.state.playerOneCards = this.state.cards.slice(0, 26);
        this.state.playerTwoCards = this.state.cards.slice(26, 52);
        console.log(this.state)
    }
    render() {
        // console.log(this.state)
        const playerOneDeck = this.state.playerOneCards.map((card, index) => {
            return <Card key={index} {...card} />
        })
        // const playerTwoDeck = this.state.playerTwoCards.map((card, index) => {
        //     return <Card key={index} {...card} />
        // })
        return (
            <div>
                {playerOneDeck.shift()}
                {/* {playerTwoDeck.shift()} */}
               {/* {cardArray.shift()}
               {cardArray.shift()}
               {cardArray.length} */}
            </div>
        )
    }
}


export default Deck
