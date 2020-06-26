import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css';
// import Deck from './Deck';
// import Card from './Card';

export class Table extends Component {

    playerOnePlay = (e) => {
        e.preventDefault();
        console.log(this.props);
        // const playerOneDeck = this.props.playerOneCards.map((card, index) => {
        //     return <Card key={index} {...card.shift()} />
        // })
    }

    playerTwoPlay = (e) => {
        e.preventDefault();
        console.log('The link was clicked for Player Two.');
    }

    render() {
        return (
            <div>
            <div className='table-top'>
                    <div className='playerOne'>
                        <div id='playerOneCard'></div>
                        <div>Player One</div>
                        <div>Cards remaining: {this.props.playerOneCards[0].length}</div>
                        <button onClick={this.playerOnePlay}>Play Card</button>
                    </div>
                <div className='playArea'>

                </div>
                    <div className='playerTwo'>
                        <div id='playerTwoCard'></div>
                        <div>Player Two</div>
                        <div>Cards remaining: {this.props.playerTwoCards[0].length}</div>
                        <button onClick={this.playerTwoPlay}>Play Card</button>
                    </div>
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { 
        deck: state.cards,
        playerOneCards: state.playerOneCards,
        playerTwoCards: state.playerTwoCards
     }
  };

export default connect(mapStateToProps)(Table);

