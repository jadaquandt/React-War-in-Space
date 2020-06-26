import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Card from './Card';


export class Game extends Component {
    render() {
        
        // console.log(this.props)
        // const playerOneDeck = this.props.playerOneCards.map((card, index) => {
        //     return <Card key={index} {...card.shift()} />
        // })
        // const playerTwoDeck = this.props.playerTwoCards.map((card, index) => {
        //     return <Card key={index} {...card} />
        // })
        return (
            <div>
                {/* <button onClick={console.log('game started')}>Start New Game</button> */}
                {/* {playerOneDeck} */}
                {/* {playerTwoDeck} */}
            </div>
        )
    }
}

// function mapStateToProps(state) {
//     return { 
//         deck: state.cards,
//         playerOneCards: state.playerOneCards,
//         playerTwoCards: state.playerTwoCards
//      }
//   };

//   function mapDispatchToProps(dispatch) {
//     return { 
//         deck: () => dispatch(startGame())
//      }
//   };

export default Game;

// export default connect(mapStateToProps)(Game);
