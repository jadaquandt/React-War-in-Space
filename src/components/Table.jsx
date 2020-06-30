import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css'; 
import Card from './Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// const startGame = () => ({ type: 'START_GAME' });
// const playCard = () => ({ type: 'PLAY_CARD' });

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

    howToPlay = (e) => {
        e.preventDefault();
        console.log('The link was clicked for Instructions');
        //return (<div> <Instructions /> </div>)
    }
    
    render() {
        // const playerOne = this.props.deck;
        // console.log(playerOne.shift())
        // let playerOneDeck = this.props.playerOneCards.map((card) => {
        //     return <div><Card key={this.props.playerOneCards.index} {...card.shift()} /> </div>
        // })
        // let playerTwoDeck = this.props.playerTwoCards.map((card) => {
        //     return <div><Card key={this.props.playerOneCards.index} {...card.shift()} /> </div>
        // });

        if (this.props.newGame === false) {
            return(
                <div style= {{textAlign: 'center'}}>
                <Typography>Want to play War?</Typography>
                <Button onClick={this.props.startGame} variant="contained" color="primary">START A NEW GAME</Button>
                <Button onClick={this.howToPlay} variant="contained" color="secondary">HOW TO PLAY</Button>
                </div>
            )
        } else if (this.props.newGame === true){
            return(
                <div style= {{textAlign: 'center'}}>
            <div className='table-top'>
                    <div className='playerOne'>
                    <div id='playerOneCard'>PLAYER ONE CARD GOES HERE</div>
                        <div>Player One</div>
                        <div>Cards remaining: {this.props.playerOneCards[0].length}</div>
                        <Button onClick={this.playerOnePlay} variant="contained" color="primary">
                        Play Card
                        </Button>
                    </div>
                <div className='playArea'>

                </div>
                    <div className='playerTwo'>
                        <div id='playerTwoCard'>PLAYER TWO CARD GOES HERE</div>
                        <div>Player Two</div>
                        <div>Cards remaining: {this.props.playerTwoCards[0].length}</div>
                        <Button onClick={this.props.playCard} variant="contained" color="primary">
                        Play Card
                        </Button>
                    </div>
            </div >
            <Button onClick={this.howToPlay} variant="contained" color="primary">HOW TO PLAY</Button>
            </div>
            )
        } 
        return (
            <div style= {{textAlign: 'center'}}>
            <div className='table-top'>
                    <div className='playerOne'>
                    <div id='playerOneCard'>PLAYER ONE CARD GOES HERE</div>
                        <div>Player One</div>
                        <div>Cards remaining: {this.props.playerOneCards[0].length}</div>
                        <Button onClick={this.playerOnePlay} variant="contained" color="primary">
                        Play Card
                        </Button>
                    </div>
                <div className='playArea'>

                </div>
                    <div className='playerTwo'>
                        <div id='playerTwoCard'>PLAYER TWO CARD GOES HERE</div>
                        <div>Player Two</div>
                        <div>Cards remaining: {this.props.playerTwoCards[0].length}</div>
                        <Button onClick={this.props.playCard} variant="contained" color="primary">
                        Play Card
                        </Button>
                    </div>
            </div >
            <Button onClick={this.howToPlay} variant="contained" color="primary">HOW TO PLAY</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        deck: state.cards,
        playerOneCards: state.playerOneCards,
        playerTwoCards: state.playerTwoCards,
        newGame: state.newGame,
     }
  };

const mapDispatchToProps = (dispatch) => {
    return {
        setUp: () => {dispatch({type: 'SETUP'})},
        startGame: () => {dispatch({type: 'START_GAME'})},
        playCard: () => {dispatch({type: 'PLAY_CARD'})},
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

