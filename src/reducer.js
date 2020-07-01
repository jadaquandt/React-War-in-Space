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
            let winner = '';
            let war = '';
            let p1Card = state.p1Deck.shift();
            let p2Card = state.p2Deck.shift();
            let p1Deck = state.p1Deck;
            let p2Deck = state.p2Deck;
            let p1Removed = [];
            let p2Removed = [];
            
            if (p1Card.point < p2Card.point){
                winner = 'Player Two';
                p1Removed = p1Card;
                p2Deck.push(p1Removed)
            }
            else if (p1Card.point > p2Card.point) {
                winner = 'Player One';
                p2Removed = p2Card;
                p1Deck.push(p2Removed)
            } else if (p1Card.point === p2Card.point) {
                winner = "tie"
                war = true
            }
            
            return {
                ...state,
                description: "CARDS HAVE BEEN PLAYED",
                p1Deck: p1Deck,
                p2Deck: p2Deck,
                p1Removed: p1Removed,
                p2Removed: p2Removed,
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
