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
    componentDidMount(){
        let cardArray = dealGame();
        let playerOneCards = [];
        let playerTwoCards = [];
        let winner = '';

        cardArray.forEach((card, index) => {
            if (index <= 25){
                playerOneCards.push(card)
                // console.log(index)
            }
            else {
                playerTwoCards.push(card)
            }
        });

        if (playerOneCards[0] < playerTwoCards[0]){
            winner = 'Player Two'
        }
        else {
            winner = 'Player One'
        }
        this.setState({
            cards: cardArray,
            playerOne: playerOneCards,
            playerTwo: playerTwoCards,
            winner: winner
        })
    }

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
        
        let tempCards = p2Removed.slice()
        let removedP2CardsString = tempCards.map((card) => {
            if(card.point !== undefined){
                return card.point + ' of ' + card.suit
            } else {
                return card.point + ' of ' + card.suit
            }
        }).join(', ')
        alert('Player One won the war and got these cards: ' + removedP2CardsString)
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

        let tempCards = p1Removed.slice()
        let removedP1CardsString = tempCards.map((card) => {
            if(card.point !== undefined){
                return card.point + ' of ' + card.suit
            } else {
                return card.point + ' of ' + card.suit
            }
        }).join(', ')
        alert('Player Two won the war and got these cards: ' + removedP1CardsString)
    } 
};
    render() {
        console.log(this.state.playerOne)
        console.log(this.state.playerTwo)
        if (this.state.playerOne.length === 0) {
            return (
                <div style={{ alignItems: 'center' }}>
                    <Alert message={'Player One lost'} type="error" />
                </div>
            )
        }
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
    
return newDeck;
}

// const cardArray = [
//     { suit: "h",
//         point: 2
//     },
//     {
//         suit: "h",
//         point: 3
//     },
//     {
//         suit: "h",
//         point: 4
//     },
//     {
//         suit: "h",
//         point: 5
//     },
//     {
//         suit: "h",
//         point: 6
//     },
//     {
//         suit: "h",
//         point: 7
//     },
//     {
//         suit: "h",
//         point: 8
//     },
//     {
//         suit: "h",
//         point: 9
//     },
//     {
//         suit: "h",
//         point: 10
//     },
//     {
//         suit: "h",
//         point: 11
//     },
//     {
//         suit: "h",
//         point: 12
//     },
//     {
//         suit: "h",
//         point: 13
//     },
//     {
//         suit: "h",
//         point: 1
//     },
//     {
//         suit: "d",
//         point: 2
//     },
//     {
//         suit: "d",
//         point: 3
//     },
//     {
//         suit: "d",
//         point: 4
//     },
//     {
//         suit: "d",
//         point: 5
//     },
//     {
//         suit: "d",
//         point: 6
//     },
//     {
//         suit: "d",
//         point: 7
//     },
//     {
//         suit: "d",
//         point: 8
//     },
//     {
//         suit: "d",
//         point: 9
//     },
//     {
//         suit: "d",
//         point: 10
//     },
//     {
//         suit: "d",
//         point: 11
//     },
//     {
//         suit: "d",
//         point: 12
//     },
//     {
//         suit: "d",
//         point: 13
//     },
//     {
//         suit: "d",
//         point: 1
//     },
//     {
//         suit: "c",
//         point: 2
//     },
//     {
//         suit: "c",
//         point: 3
//     },
//     {
//         suit: "c",
//         point: 4
//     },
//     {
//         suit: "c",
//         point: 5
//     },
//     {
//         suit: "c",
//         point: 6
//     },
//     {
//         suit: "c",
//         point: 7
//     },
//     {
//         suit: "c",
//         point: 8
//     },
//     {
//         suit: "c",
//         point: 9
//     },
//     {
//         suit: "c",
//         point: 10
//     },
//     {
//         suit: "c",
//         point: 11
//     },
//     {
//         suit: "c",
//         point: 12
//     },
//     {
//         suit: "c",
//         point: 13
//     },
//     {
//         suit: "c",
//         point: 1

//     },
//     {
//         suit: "s",
//         point: 2
//     },
//     {
//         suit: "s",
//         point: 3
//     },
//     {
//         suit: "s",
//         point: 4
//     },
//     {
//         suit: "s",
//         point: 5
//     },
//     {
//         suit: "s",
//         point: 6
//     },
//     {
//         suit: "s",
//         point: 7
//     },
//     {
//         suit: "s",
//         point: 8
//     },
//     {
//         suit: "s",
//         point: 9
//     },
//     {
//         suit: "s",
//         point: 10
//     },
//     {
//         suit: "s",
//         point: 11
//     },
//     {
//         suit: "s",
//         point: 12
//     },
//     {
//         suit: "S",
//         point: 13,
//     },
//     {
//         suit: "S",
//         point: 1,
//     }];

export default Game;
