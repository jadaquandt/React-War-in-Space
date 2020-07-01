import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css'; 
import Card from './Card';
// import Instructions from './Instructions';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


export class Table extends Component {

    playerTwoPlay = (e) => {
        // e.preventDefault();
        console.log('The link was clicked for Player Two.');
        console.log(e);
    }

    playerOnePlay = (e) => {
        let playerOne = this.props.playerOneCards.shift()
        let p1 = document.getElementById('playerOneCard');
        // console.log(e)
        // let playerOneDeck = this.props.playerOneCards.shift();
        // playerOneDeck.shift();
        console.log(playerOne)
        let p1Card = playerOne.shift();
        console.log(p1Card)
        // return <Card key={this.p1Card.id}/>
        // let playerOneDeck = e.map((card) => {
        //         return p1Card.innerHTML = <div><Card key={this.props.playerOneCards.index} {...card.shift()} /> </div>
        //     })
        // let playerOneDeck = e.map((card) => {
        //         return <Card key={this.props.playerOneCards.index} {...card.shift()} />
        //     })
        // console.log(playerOneDeck)
        return p1.innerHTML = <div><Card props={p1Card}/></div>
    }

    render() {
        let playerOne = this.props.playerOneCards;
        let playerTwo = this.props.playerOneCards;
        // const playerOne = this.props.deck;
        // console.log(playerOne.shift())
        // let playerOneDeck = this.props.playerOneCards.map((card) => {
        //     return <div><Card key={this.props.playerOneCards.index} {...card.shift()} /> </div>
        // })
        // let playerTwoDeck = this.props.playerTwoCards.map((card) => {
        //     return <div><Card key={this.props.playerOneCards.index} {...card.shift()} /> </div>
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
                        <div>Cards remaining: {this.props.playerOneCards[0].length}</div>
                        <Button onClick={() => {this.playerOnePlay(playerOne)}} variant="contained" color="primary">
                        Play Card
                        </Button>
                    </div>
                <div className='playArea'>

                </div>
                    <div className='playerTwo'>
                        <div id='playerTwoCard'>PLAYER TWO CARD GOES HERE</div>
                        <div>Player Two</div>
                        <div>Cards remaining: {this.props.playerTwoCards[0].length}</div>
                        <Button onClick={() => {this.playerTwoPlay(playerTwo)}} variant="contained" color="primary">
                        Play Card
                        </Button>
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
        howToPlay: () => {dispatch({type: 'GAME_INSTRUCTIONS'})},
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);

