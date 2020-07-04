import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css'; 
import Card from './Card';
// import Instructions from './Instructions';
import War from './War';
import Title from './Title';
import { Button } from '@material-ui/core';
// import alienCard from "/cards/astronaut_back.png";
 
export class Table extends Component {

    render() {
        if (this.props.status === "Setup") {
            return(
                <div style= {{textAlign: 'center'}}>
                <Title/>
                <Button onClick={this.props.startGame} variant="contained" color="primary">Start a new game</Button>
                </div>
            )
//Once user clicks "New Game" button
        } else if (this.props.status === "New Game"){
            return(
                <div style= {{textAlign: 'center'}}>
            <div className='table-top'>
                    <div className='playerOne'>
                    <br></br> 
                    <img src="/cards/astronaut_back.png" alt="Playing Card"/>
                        <div>Player One</div>
                        <img src="/astronaut.png" alt="Playing Card" className="playerImg"/>
                        <div>Cards remaining: {this.props.p1Deck.length}</div>
                    </div>
                <div className='playArea'>
                        <p>Click to begin round!</p>
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
                        <p>The winner is: {this.props.winner}</p>
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
                   {this.props.p1Card.point}{this.props.p1Card.suit}
                    <br></br> 
                    <Card player={2} />
                        <div>Player One</div>
                        <img src="/astronaut.png" alt="Playing Card" className="playerImg"/>
                        <div>Cards remaining: {this.props.p1Deck.length}</div>
                    </div>
                <div className='playArea'>
                <War />
                </div>
                    <div className='playerTwo'>
                    {this.props.p2Card.point}{this.props.p2Card.suit}
                    <br></br>
                    <Card {...this.props.p2Card}/>
                        <div>Player Two</div>
                        <img src="/alien.png" alt="Playing Card" className="playerImg"/>
                        <div>Cards remaining: {this.props.p2Deck.length}</div>
                    </div>
            </div >
            </div>
                </div>
            )
        }
        return (
            <div style= {{textAlign: 'center'}}>
            <p>This is the last else condition</p>
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

