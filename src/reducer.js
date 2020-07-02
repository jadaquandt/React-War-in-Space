// import { START_GAME } from './actions/actionTypes';

const newDeck = dealGame();
const initialState = {
    cards: newDeck,
    status: 'Setup',
    gameOver: false,
    winner: null,
    p1Deck: [],
    p2Deck: [],
    lostCards: [],
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
                status: "New Game",
                p1Deck: playerOne,
                p2Deck: playerTwo,
                description: "game is loaded",
            };
        case "PLAY_CARD":
    //when user clicks play round button
    //determines winner of hand and pushes cards to respective winner
            let winner = '';
            let status = '';
            let p1Card = state.p1Deck.shift();
            let p2Card = state.p2Deck.shift();
            let p1Deck = state.p1Deck;
            let p2Deck = state.p2Deck;
            let lostCards = [];
            
            if (p1Card.point < p2Card.point){
                winner = 'Player Two';
                status = "New Game";
                p2Deck.push(p1Card);
                p2Deck.push(p2Card);
                
            }
            else if (p1Card.point > p2Card.point) {
                winner = 'Player One';
                status = "New Game";
                p1Deck.push(p1Card);
                p1Deck.push(p2Card);
            } else if (p1Card.point === p2Card.point) {
                winner = "Tie";
                status = "War"
                lostCards.push(p1Card, p2Card)
            }
            
            return {
                ...state,
                description: "CARDS HAVE BEEN PLAYED",
                status: status,
                p1Deck: p1Deck,
                p2Deck: p2Deck,
                lostCards: lostCards,
                winner: winner,
            };
            // case "WAR":
            // let p1War = state.p1Deck.slice(0,3);
            // let p2War = state.p2Deck.slice(0,3);
            // let p1WarCard = p1War.shift();
            // let p2WarCard = p2War.shift();
            // let wonCards = [];
            // let warWinner = "";
            // let warStatus = "";

            // if (p1WarCard.point < p2WarCard.point){
            //     warWinner = 'Player Two';
            //     warStatus = "New Game";
            //     wonCards.push(p1WarCard);
            //     wonCards.push(p2WarCard);
            // }
            // else if (p1WarCard.point > p2WarCard.point) {
            //     warWinner = 'Player One';
            //     warStatus = "New Game";
            //     wonCards.push(p1WarCard);
            //     wonCards.push(p2WarCard);
            // } else if (p1WarCard.point === p2WarCard.point) {
            //     warWinner = "Tie";
            //     warStatus = "War"
            //     wonCards.push(p1WarCard, p2WarCard, state.lostCards)
            // }
            
            // return {
            //     ...state,
            //     description: "War has happened",
            //     status: warStatus,
            //     p1Deck: p1Deck,
            //     p2Deck: p2Deck,
            //     lostCards: lostCards,
            //     winner: warWinner,
            // };
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

