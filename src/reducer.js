// import { START_GAME } from './actions/actionTypes';

const newDeck = dealGame();
const initialState = {
    cards: newDeck,
    status: 'Setup',
    gameOver: false,
    winner: null,
    p1Deck: [],
    p2Deck: [],
    p1Card: "",
    p2Card: "",
    lostCards: [],

    getInstructions: false,
    description: "",
}

export default function reducer (state = initialState, action) {
    let winner = '';
    let status = '';
    let lostCards = [];
    let p1Deck = state.p1Deck;
    let p2Deck = state.p2Deck;

    switch (action.type) {
        case "SETUP":
            return {
                ...state,
                description: "Game will begin shortly"
            };
        case "START_GAME":
            let playerOne = state.cards.slice(0, 26);
            let playerTwo = state.cards.slice(26);
            return {
                ...state,
                cards: state.cards,
                status: "New Game",
                p1Deck: playerOne,
                p2Deck: playerTwo,
                description: "game is loaded",
            };
        case "PLAY_CARD":
    //when user clicks play cards button
    //determines winner of hand and pushes cards to respective winner or to war
            let p1Card = state.p1Deck.shift();
            let p2Card = state.p2Deck.shift();
            
            if (p1Deck.length < 2){
                winner = "Player Two";
                status = "Game Over";
            } else if (p2Deck.length < 2){
                winner = "Player One";
                status = "Game Over";
            } else if (p1Card.point < p2Card.point){
                winner = 'Player Two';
                status = "In Progress";
                lostCards.push(p1Card, p2Card);
                p2Deck.push(p1Card, p2Card);
            } else if (p1Card.point > p2Card.point) {
                winner = 'Player One';
                status = "In Progress";
                lostCards.push(p1Card, p2Card);
                p1Deck.push(p1Card, p2Card);
            } else if (p1Card.point === p2Card.point) {
                winner = "Tie";
                status = "War"
                lostCards.push(p1Card, p2Card)
            } 
            return {
                ...state,
                description: "Cards have been played",
                status: status,
                p1Deck: p1Deck,
                p2Deck: p2Deck,
                p1Card: p1Card,
                p2Card: p2Card,
                lostCards: lostCards,
                winner: winner,
            };
            case "WAR":
            //Gets cards for each player to "war"
            let p1War = p1Deck.slice(0, 4);
            let p2War = p2Deck.slice(0, 4);
            let p1WarCard = p1War[3];
            let p2WarCard = p2War[3];
            let warWinner = "";
            let warStatus = "";
            //Removes cards from state
            p1Deck = removeWarCards(p1Deck);
            p2Deck = removeWarCards(p2Deck);
            //Puts all cards into the "pot" for the winner
            lostCards = state.lostCards.concat(p1War, p2War)
            //War below
            if (p1Deck.length < 2){
                winner = "Player Two";
                status = "Game Over";
            } else if (p2Deck.length < 2){
                winner = "Player One";
                status = "Game Over";
            } 
            else if (p1WarCard.point < p2WarCard.point){
                warWinner = 'Player Two';
                warStatus = "In Progress";
                //Add all cards to state
                p2Deck = p2Deck.concat(lostCards);
            } else if (p1WarCard.point > p2WarCard.point) {
                warWinner = 'Player One';
                warStatus = "In Progress";
                 //Add all cards to state
                p1Deck = p1Deck.concat(lostCards);
            } else if (p1WarCard.point === p2WarCard.point) {
                warWinner = "Tie";
                warStatus = "War"
            } 
            return {
                ...state,
                description: "War has happened",
                status: warStatus,
                p1Deck: p1Deck,
                p2Deck: p2Deck,
                p1Card: p1WarCard,
                p2Card: p2WarCard,
                lostCards: lostCards,
                winner: warWinner,
            };
        case "GAME_INSTRUCTIONS":
            return {
                ...state,
                status: "Get Instructions",
            };
        case "END_GAME":
            return {
                ...state,
            status: "Game Over",
                };
        default: return state;
    }
}

//Function to get a new deck of cards for our state
function dealGame() {
    let suits = ['C', 'D', 'H', 'S'];
    let points = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    let newDeck = [];
//For loops to create new deck  
    for(var i = 0; i < suits.length; i++) {
        for(var j = 0; j < points.length; j++) {
          var card = {point: points[j], suit: suits[i]};
          newDeck.push(card);
        }
      }
//Shuffle Deck array twice using sort
    newDeck.sort(() => Math.random() - 0.5);
//Giving it an id to help with the map function later
newDeck.forEach((item, i) => {
    item.id = i + 1;
})
    
return newDeck;
};
//Function to shift off first 4 cards to play war
function removeWarCards(arr) {
    for ( var i = 0; i < 4; i++ ) {
        arr.shift();
    }
    return arr
}
