// import { START_GAME } from './actions/actionTypes';

const newDeck = dealGame();
const initialState = {
    cards: newDeck,
    newGame: false,
    gameOver: false,
    playerOneCards: [],
    playerTwoCards: [],
    p1Card: null,
    p2Card: null,
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
            let playerOne = [state.cards.slice(0, 26)];
            let playerTwo = [state.cards.slice(26, 52)];
            return {
                ...state,
                cards: state.cards,
                newGame: true,
                playerOneCards: playerOne,
                playerTwoCards: playerTwo,
                description: "game is loaded",
            };
        case "PLAY_CARD":
            return {
                ...state,
                description: "DISPATCH IS WORKING",
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
}
