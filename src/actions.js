// import { START_GAME } from './actionTypes';

export function startGame(description){
    return {
        type: "START_GAME",
        payload: {
          description: description,
        }
    }
}