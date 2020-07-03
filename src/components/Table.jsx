import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css'; 
import Card from './Card';
// import Instructions from './Instructions';
import Button from '@material-ui/core/Button';
import War from './War';
// import { Typography } from '@material-ui/core';
 
export class Table extends Component {

    render() {
        if (this.props.status === "Setup") {
            return(
                <div style= {{textAlign: 'center'}}>
                {/* <Typography variant="h3" display="block">Want to play War?</Typography> */}
                <div className="neons"><h1>War <span id="title">(in Space)</span></h1></div>
                <Button onClick={this.props.startGame} variant="contained" color="primary">Start a new game</Button>
                </div>
            )
//Once user clicks "New Game" button
        } else if (this.props.status === "New Game"){
            return(
                <div style= {{textAlign: 'center'}}>
            <div className='table-top'>
                    <div className='playerOne'>
                        {this.props.p1Card.point}{this.props.p1Card.suit}
                        <Card props={this.props.p1Card}/>
                        <div>Player One</div>
                        <div>Cards remaining: {this.props.p1Deck.length}</div>
                    </div>
                <div className='playArea'>
                        <p>The winner is: {this.props.winner}</p>
                <Button onClick={() => {this.props.playCard()}} variant="contained" color="primary">
                        Play Cards
                        </Button>
                </div>
                    <div className='playerTwo'>
                    {this.props.p2Card.point}{this.props.p2Card.suit}
                    {/* <Card point={this.props.p2Deck[0].point} suit={this.props.p2Deck[0].suit}/> */}
                        <div>Player Two</div>
                        <div>Cards remaining: {this.props.p2Deck.length}</div>
                    </div>
            </div >
            </div>
            )
        } else if(this.props.status === "War"){
            return(
                <div>
                    <War />
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

