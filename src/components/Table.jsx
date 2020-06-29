import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css'; 
import Card from './Card';
import Button from '@material-ui/core/Button';


export class Table extends Component {

    playerOnePlay = (e) => {
        // e.preventDefault();
        // let playerOneDeck = this.props.playerOneCards.shift();
        console.log("playerOneDeck");
        // playerOneDeck.shift();
    }

    playerTwoPlay = (e) => {
        e.preventDefault();
        console.log('The link was clicked for Player Two.');
    }
    
    render() {
        const playerOne = this.props.deck;
        console.log(playerOne.shift())
        let playerOneDeck = this.props.playerOneCards.map((card, index) => {
            return <div><Card key={index} {...card.shift()} /> </div>
        })
        let playerTwoDeck = this.props.playerTwoCards.map((card, index) => {
            return <div><Card key={index} {...card.shift()} /> </div>
        })
        return (
            <div>
            <div className='table-top'>
                    <div className='playerOne'>
                    <div id='playerOneCard'>{playerOneDeck}</div>
                        <div>Player One</div>
                        <div>Cards remaining: {this.props.playerOneCards[0].length}</div>
                        <Button onClick={this.playerOnePlay} variant="contained" color="primary">
                        Play Card
                        </Button>
                    </div>
                <div className='playArea'>

                </div>
                    <div className='playerTwo'>
                        <div id='playerTwoCard'>{playerTwoDeck}</div>
                        <div>Player Two</div>
                        <div>Cards remaining: {this.props.playerTwoCards[0].length}</div>
                        <Button onClick={this.playerTwoPlay} variant="contained" color="primary">
                        Play Card
                        </Button>
                    </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        deck: state.cards,
        playerOneCards: state.playerOneCards,
        playerTwoCards: state.playerTwoCards,
        newGame: state.newGame
     }
  };

const mapDispatchToProps = (dispatch) => {
    return{
        playCard: () => {
            return dispatch({type: 'PLAY_CARD'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

