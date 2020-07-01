// import { START_GAME } from './actions/actionTypes';

const newDeck = dealGame();
const initialState = {
    cards: newDeck,
    newGame: false,
    gameOver: false,
    winner: null,
    p1Deck: [],
    p2Deck: [],
    getInstructions: false,
    description: "",
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case "SETUP":
            return {
                ...state,
                description: "Game will begin shortly"
            };
        case "START_GAME":
            let playerOne = state.cards.slice(0, 26);
            let playerTwo = state.cards.slice(26, 52);
            return {
                ...state,
                cards: state.cards,
                newGame: true,
                p1Deck: playerOne,
                p2Deck: playerTwo,
                description: "game is loaded",
            };
        case "PLAY_CARD":
    //when user clicks play round button
    //determines winner of hand and pushes cards to respective winner
            let winner = '';
            let war = '';
            let p1Card = state.p1Deck.shift();
            let p2Card = state.p2Deck.shift();
            let p1Deck = state.p1Deck;
            let p2Deck = state.p2Deck;
            let p1LostCards = [];
            let p2LostCards = [];
            
            if (p1Card.point < p2Card.point){
                winner = 'Player Two';
                p2Deck.push(p1Card);
                p2Deck.push(p2Card)
            }
            else if (p1Card.point > p2Card.point) {
                winner = 'Player One';
                p1Deck.push(p1Card);
                p1Deck.push(p2Card);
            } else if (p1Card.point === p2Card.point) {
                winner = "tie";
                war = true;
            }
            
            return {
                ...state,
                description: "CARDS HAVE BEEN PLAYED",
                p1Deck: p1Deck,
                p2Deck: p2Deck,
                p1LostCards: p1LostCards,
                p2LostCards: p2LostCards,
                winner: winner,
                war: war,
            };
        case "GAME_INSTRUCTIONS":
            return {
                ...state,
                getInstructions: true,
            };
        default: return state;
    }
}

function makeWar(card){
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


//Function to get a new deck of cards for our state
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
};
