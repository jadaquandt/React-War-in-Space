import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css'; 
// import Card from './Card';
// import Instructions from './Instructions';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
 
export class Table extends Component {
   
    render() {
        // console.log(this.state.p1Deck);
        // let playerOneDeck = this.props.p1Deck.map((card) => {
        //     return <div><Card key={this.props.p1Deck.index} {...card.shift()} /> </div>
        // })
        // let playerTwoDeck = this.props.p2Deck.map((card) => {
        //     return <div><Card key={this.props.p1Deck.index} {...card.shift()} /> </div>
        // });
//App beginning
        if (this.props.newGame === false) {
            return(
                <div style= {{textAlign: 'center'}}>
                <h1>Want to play War?</h1>
                <Button onClick={this.props.startGame} variant="contained" color="primary">START A NEW GAME</Button>
                </div>
            )
//Once user clicks "New Game" button
        } else if (this.props.newGame === true){
            return(
                <div style= {{textAlign: 'center'}}>
            <div className='table-top'>
                    <div className='playerOne'>
                    <div id='playerOneCard'>PLAYER ONE CARD GOES HERE</div>
                        <div>Player One</div>
                        {/* <div>Cards remaining: {this.state.p1Deck.length}</div> */}
                        <div>Cards remaining: {this.props.p1Deck.length}</div>
                        <Button onClick={() => {this.props.playCard()}} variant="contained" color="primary">
                        Play Card
                        </Button>
                    </div>
                <div className='playArea'>

                </div>
                    <div className='playerTwo'>
                        <div id='playerTwoCard'>PLAYER TWO CARD GOES HERE</div>
                        <div>Player Two</div>
                        {/* <div>Cards remaining: {this.state.p2Deck.length}</div> */}
                        <div>Cards remaining: {this.props.p2Deck.length}</div>
                        {/* <Button onClick={() => {this.playerTwoPlay()}} variant="contained" color="primary">
                        Play Card
                        </Button> */}
                    </div>
            </div >
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

