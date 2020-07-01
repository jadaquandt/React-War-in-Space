import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Card from './Card';
import Alert from '@material-ui/core/Button';


export class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            cards: [],
            playerOne: [],
            playerTwo: [],
            gameOver: false,
        }
    }
    // componentDidMount(){
    //     let cardArray = dealGame();
    //     let playerOneCards = [];
    //     let playerTwoCards = [];
    //     let winner = '';

    //     cardArray.forEach((card, index) => {
    //         if (index <= 25){
    //             playerOneCards.push(card)
    //             // console.log(index)
    //         }
    //         else {
    //             playerTwoCards.push(card)
    //         }
    //     });

    //     if (playerOneCards[0] < playerTwoCards[0]){
    //         winner = 'Player Two'
    //     }
    //     else {
    //         winner = 'Player One'
    //     }
    //     this.setState({
    //         cards: cardArray,
    //         playerOne: playerOneCards,
    //         playerTwo: playerTwoCards,
    //         winner: winner
    //     })
    // }

    makeWar(card){
        let war = card + 4;
        let winner = '';
        let playerOne = this.state.playerOne.slice();
        let playerTwo = this.state.playerTwo.slice();
        let p1Point = '';
        let p2Point = '';

        //Gets points from player cards to compare
        if(playerOne[war] === undefined){
            p1Point = playerOne[playerOne.length -1].point;
            p2Point = playerTwo[war].point;
        } else if (playerTwo[war] === undefined) {
            p2Point = playerTwo[playerTwo.length -1].point;
            p1Point = playerOne[war].point;
        } else {
            p1Point = playerOne[war].point;
            p2Point = playerTwo[war].point;
        }
        //Determines winner of war, or if the cards happen to be the same,
        //Runs function again
        if (p1Point > p2Point){
            winner = 'Player One'
        } else if (p1Point < p2Point) {
            winner = 'PlayerTwo'
        } else {
            this.makeWar(war)
        }
    //Gets remaining hand for players
    if (winner === 'Player One'){
            let p1Removed = [];
            let p2Removed = [];
        //If P1 wins war, then she gets P2 cards
        if (playerTwo.length < war) {
            p2Removed = playerTwo.slice();
            playerTwo = [];
            for (let i = 0; i < war +1; i++){
                p1Removed[i] = playerOne.shift()
            }
        //If player two wins
        } else if (playerOne.length < war) {
            p1Removed = playerOne.slice();
            playerOne = [];
            for (let i = 0; i < war +1; i++){
                p2Removed[i] = playerTwo.shift()
            }
        } else {
            for (let i = 0; i < war + 1; i++) {
                p1Removed[i] = playerOne.shift()
                p2Removed[i] = playerTwo.shift()
            }
        }
        playerOne.push(...p2Removed);
        playerTwo.push(...p1Removed);

        this.setState ({
            playerOne: playerOne,
            playerTwo: playerTwo,
        })
        
        alert('Player One won the war')
    } 
else if (winner === 'Player Two') {
        let p1Removed = [];
        let p2Removed = [];
        if (playerTwo.length < war){
            p2Removed = playerTwo.slice();
            playerTwo = [];
            for (let i = 0; i < war +1; i++){
                p1Removed[i] = playerOne.shift()
            }
        } else if (playerOne.length < war) {
            p1Removed = playerOne.slice();
            playerOne = []
            for (let i = 0; i < war + 1; i++) {
                p2Removed[i] = playerOne.shift()
            }
        } else {
            for (let i = 0; i < war + 1; i++) {
                p1Removed[i] = playerOne.shift()
                p2Removed[i] = playerTwo.shift()
            }
    }
        playerOne.push(...p2Removed);
        playerTwo.push(...p1Removed);

        this.setState ({
            playerOne: playerOne,
            playerTwo: playerTwo,
        })
        alert('Player Two won the war')
    } 
};

 //when user clicks next hand
    //determines winner of previous hand and pushes cards to respective winner
    playGame(p1Card, p2Card) {
        let winner = '';
        let playerOne = this.state.playerOne.slice()
        let playerTwo = this.state.playerTwo.slice()
        
        if (p1Card.value < p2Card.value) {
            winner = 'Player Two';
        } else if (p1Card.value > p2Card.value) {
            winner = 'Player One';
        } else {
            this.makeWar(0)
        }
        if (winner === 'Player One') {
            var p2Removed = playerTwo.shift();
            var p1Removed = playerOne.shift();
            playerOne.push(p2Removed)
            playerTwo.push(p1Removed)
            this.setState({
                playerOne: playerOne,
                playerTwo: playerTwo
            })
        } else if (winner === 'Player Two') {
            var p1Removed = playerOne.shift();
            var p2Removed = playerTwo.shift();
            playerTwo.push(p1Removed)
            playerOne.push(p2Removed)
            this.setState({
                playerOne: playerOne,
                playerTwo: playerTwo
            })
        }
    }

    render() {
        if (this.state.playerOne.length === 0) {
            return (
                <div>
                    <Alert message={'Player One lost'} type="error" />
                </div>
            )
        }
        if (this.state.playerTwo.length === 0) {
            return (
                <div>
                    <Alert message={'Player Two lost'} type="error" />
                </div>
            )
        }
        // let p1Card = this.state.playerOne[0]
        // let p2Card = this.state.playerTwo[0]
        return (
            <div>
                
            </div>
        )
    }
}

function dealGame() {
    let suits = ['C', 'D', 'H', 'S'];
    let points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let newDeck = [];
//For loops to create new deck  
    for(var i = 0; i < suits.length; i++) {
        for(var j = 0; j < points.length; j++) {
          var card = {point: points[j], suit: suits[i]};
          newDeck.push(card);
        }
      }
//Shuffle Deck array using sort
    newDeck.sort(() => Math.random() - 0.5);
//Giving it an id to help with the map function later
    newDeck.forEach((item, i) => {
        item.id = i + 1;
    })

return newDeck;
}

export default Game;
