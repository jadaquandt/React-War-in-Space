import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css'; 
import Card from './Card';
// import Instructions from './Instructions';
import War from './War';
import Title from './Title';
import { Button } from '@material-ui/core';
 
export class Table extends Component {

    render() {
        if (this.props.status === "Setup") {
            return(
                <div style= {{textAlign: 'center'}}>
                <Title/>
                <Button onClick={this.props.startGame} variant="contained" color="primary">Start a new game</Button>
                {/* <Button onClick={this.props.} variant="contained" color="primary">How to play</Button> */}
                </div>
            )
//Once user clicks "New Game" button
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
                        <h2>The winner is: {this.props.winner}</h2>
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
        } else if(this.props.status === "War"){
            return(
                <div>
                    <div style= {{textAlign: 'center'}}>
            <div className='table-top'>
                    <div className='playerOne'>
                    <br></br> 
                    <Card player={1} />
                        <div>Player One</div>
                        <img src="/astronaut.png" alt="Playing Card" className="playerImg"/>
                        <div>Cards remaining: {this.props.p1Deck.length}</div>
                    </div>
                <div className='playArea'>
                <War />
                </div>
                    <div className='playerTwo'>
                    <br></br>
                    <Card player={2} />
                        <div>Player Two</div>
                        <img src="/alien.png" alt="Playing Card" className="playerImg"/>
                        <div>Cards remaining: {this.props.p2Deck.length}</div>
                    </div>
            </div >
            </div>
                </div>
            )
        } else if (this.props.status === "Game Over") {
            return(
            <div style= {{textAlign: 'center'}}>
            <h1>Game Over!</h1>
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

