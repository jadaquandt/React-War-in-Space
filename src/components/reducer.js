import { Provider } from 'react-redux';

const START_GAME = 'START_GAME';
const initialState =

function startGame(){
    return{
        type: START_GAME,
        info: 'First redux action'
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

const store = createStore(reducer);