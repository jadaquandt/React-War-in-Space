import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css'; 
import Card from './Card';
import War from './War';
import Title from './Title';
import Instructions from './Instructions';
import { Button } from '@material-ui/core';

export class Table extends Component {

    render() {
//Renders title page and buttons to start a new game or get instructions
        if (this.props.status === "Setup") {
            return(
                <div style= {{textAlign: 'center'}}>
                <Title/>
                <Button onClick={this.props.startGame} variant="contained" color="primary">Start a new game</Button>
                <Button style= {{marginLeft: '10px'}} onClick={this.props.howToPlay} variant="contained" color="secondary">How to play</Button>
                </div>
            )
//If user clicks "How to Play"
        } else if (this.props.status === "Get Instructions"){
            return( 
            <Instructions /> 
            )
//Once user clicks "Start a New Game" button
        } else if (this.props.status === "New Game"){
            return(
                <div style= {{textAlign: 'center'}}>
            <div className='table-top'>
                    <div className='playerOne'>
                    <img src="/cards/astronaut_back.png" alt="Playing Card"/>
                        <div>Player One</div>
                        <img src="/astronaut.png" alt="Playing Card" className="playerImg"/>
                        <div>Cards remaining: {this.props.p1Deck.length}</div>
                    </div>
                <div className='playArea'>
                        <h2>Click to begin round!</h2>
                <Button onClick={() => {this.props.playCard()}} variant="contained" color="primary">
                        Play Cards
                        </Button>
                </div>
                    <div className='playerTwo'>
                    <img src="/cards/alien_back.png" alt="Playing Card"/>
                        <div>Player Two</div>
                        <img src="/alien.png" alt="Playing Card" className="playerImg"/>
                        <div>Cards remaining: {this.props.p2Deck.length}</div>
                    </div>
            </div >
            </div>
            )
//When user clicks "Play Cards"
        } else if (this.props.status === "In Progress"){
            return(
                <div style= {{textAlign: 'center'}}>
            <div className='table-top'>
                    <div className='playerOne'>
                    <Card player={1} />
                        <div>Player One</div>
                        <img src="/astronaut.png" alt="Playing Card" className="playerImg"/>
                        <div>Cards remaining: {this.props.p1Deck.length}</div>
                    </div>
                <div className='playArea'>
                        <h2>The winner is <span className="makeItGlow">{this.props.winner}</span></h2>
                <Button onClick={() => {this.props.playCard()}} variant="contained" color="primary">
                        Play Cards
                        </Button>
                </div>
                    <div className='playerTwo'>
                    <Card {...this.props.p2Card}/>
                        <div>Player Two</div>
                        <img src="/alien.png" alt="Playing Card" className="playerImg"/>
                        <div>Cards remaining: {this.props.p2Deck.length}</div>
                    </div>
            </div >
            </div>
            )
//Handles if cards are the same point value...aka War
        } else if(this.props.status === "War"){
            return(
                <div>
                    <div style= {{textAlign: 'center'}}>
            <div className='table-top'>
                    <div className='playerOne'>
                    <br></br> 
                    <Card player={1} />
                        <div>Player One</div>
                        <img src="/astronaut.png" alt="Astronaut" className="playerImg"/>
                        <div>Cards remaining: {this.props.p1Deck.length}</div>
                    </div>
                <div className='playArea'>
                <War />
                </div>
                    <div className='playerTwo'>
                    <br></br>
                    <Card player={2} />
                        <div>Player Two</div>
                        <img src="/alien.png" alt="Alien" className="playerImg"/>
                        <div>Cards remaining: {this.props.p2Deck.length}</div>
                    </div>
            </div >
            </div>
                </div>
            )
        } else if (this.props.status === "Game Over") {
            return(
            <div style= {{textAlign: 'center'}}>
            <h1 className="makeItGlow">Game Over!</h1>
            <h2>The winner is: {this.props.winner}! Congrats!</h2>
            <h3>Want to play again?</h3>
            <Button onClick={this.props.startGame} variant="contained" color="primary">Start a new game</Button>
            </div> 
            )
        }
        return (
            <div style= {{textAlign: 'center'}}>
            <p>Uh oh! Something went wrong with the app!</p>
            <Button onClick={this.props.startGame} variant="contained" color="primary">Start a new game</Button>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return { 
        ...state,
     }
  };

const mapDispatchToProps = (dispatch) => {
    return {
        setUp: () => {dispatch({type: 'SETUP'})},
        startGame: () => {dispatch({type: 'START_GAME'})},
        playCard: () => {dispatch({type: 'PLAY_CARD'})},
        howToPlay: () => {dispatch({type: 'GAME_INSTRUCTIONS'})},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

