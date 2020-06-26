import React, { Component } from 'react';
import Card from './Card';

export class Game extends Component {
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
        newDeck.forEach((card, index) => {
            if (index <= 25){
                playerOneCards.push(card)
                console.log(index)
            }
            else {
                playerTwoCards.push(card)
            }
        });
//Set the state with the new array info
        this.setState({ 
            cards: newDeck,
            playerOneCards: playerOneCards,
            playerTwoCards: playerTwoCards
            });
        }
    // makeWar = () => {
    //     const war = card + 4;
    // }
    render() {
        // console.log(this.state)
        const playerOneDeck = this.state.playerOneCards.map((card, index) => {
            return <Card key={index} {...card} />
        })
        return (
            <div>
                <button onClick={this.dealGame}>Start New Game</button>
                {playerOneDeck}
            </div>
        )
    }
}

export default Game
