import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

export class Game extends Component {

// //Deal Cards to players, half a deck array each:
//         newDeck.forEach((card, index) => {
//             if (index <= 25){
//                 playerOneCards.push(card)
//                 console.log(index)
//             }
//             else {
//                 playerTwoCards.push(card)
//             }
//         });
// //Set the state with the new array info
//         this.setState({ 
//             playerOneCards: playerOneCards,
//             playerTwoCards: playerTwoCards
//             });
//         }
    // makeWar = () => {
    //     const war = card + 4;
    // }
    render() {
        console.log(this.props)
        const playerOneDeck = this.props.deck.map((card, index) => {
            return <Card key={index} {...card} />
        })
        return (
            <div>
                {/* <button onClick={console.log('game started')}>Start New Game</button> */}
                {playerOneDeck}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        deck: state.cards,
     }
  };

//   function mapDispatchToProps(dispatch) {
//     return { 
//         deck: () => dispatch(startGame())
//      }
//   };

export default connect(mapStateToProps)(Game);
