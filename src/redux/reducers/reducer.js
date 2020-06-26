const START_GAME = 'START_GAME';
const initialState = {
    cards: [],
    playerOneCards: [],
    playerTwoCards: [],
}

function startGame(){
    return{
        type: START_GAME,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_GAME: return {
            cards: state.cards,
            playerOneCards: state.playerOneCards,
            playerTwoCards: state.playerTwoCards,
        }
        default: return state
    }
}
