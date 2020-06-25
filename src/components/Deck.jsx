//-----This component makes a shuffled Deck and
import React, { Component } from 'react';
import Card from './Card';

export class Deck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            playerOneCards: [],
            playerTwoCards: [],
        }
    }
//Function to deal game      
    dealGame = () => {
            let suits = ['C', 'D', 'H', 'S'];
            let points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
            let newDeck = [];
            let playerOneCards = [];
            let playerTwoCards = [];
//For loops to create new deck  
            for(var i = 0; i < suits.length; i++) {
                for(var j = 0; j < points.length; j++) {
                  var card = {point: points[j], suit: suits[i]};
                  newDeck.push(card);
                }
              }
//Shuffle Deck array using sort
        newDeck.sort(() => Math.random() - 0.5);
//Deal Cards to players, half a deck array each:
        playerOneCards = newDeck.slice(0, 26);
        playerTwoCards = newDeck.slice(26, 52);
//Set the state with the new array info
        this.setState({ 
            cards: newDeck,
            playerOneCards: playerOneCards,
            playerTwoCards: playerTwoCards
            });
        }

    render() {
        // console.log(this.state)
        const playerOneDeck = this.state.playerOneCards.map((card, index) => {
            return <Card key={index} {...card} />
        })
        return (
            <div>
                <button onClick={this.dealGame}>Start New Game</button>
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
