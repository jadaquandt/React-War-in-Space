import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Table.css'; 
// import Card from './Card';
// import Instructions from './Instructions';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
 
export class Table extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         playerOneCards: [],
    //         p2Deck: [],
    //         p1Removed: [],
    //         p2Removed: [],
    //         war: false,
    //         winner: ''
    //     }
    // }

    // //Deals player hands
    // componentDidMount(){
    //     let playerOneCards = [];
    //     let playerTwoCards = [];

    //     this.props.cards.forEach((card, index) => {
    //         if (index <= 25){
    //             playerOneCards.push(card)
    //             // console.log(index)
    //         }
    //         else {
    //             playerTwoCards.push(card)
    //         }
    //     });

    //     this.setState({
    //         playerOneCards: playerOneCards,
    //         playerTwoCards: playerTwoCards,
    //     })
    // }

    // playerTwoPlay = (e) => {
    //     let p2 = document.getElementById('playerTwoCard');
    //     let p2Card = this.state.p2Deck.shift();
    //     console.log(p2Card)

    //     this.setState({
    //         p2Deck: this.state.p2Deck,
    //     })
    //     return p2.innerHTML = <Card props={p2Card}/>
    // }

    // playRound = () => {
    //     let winner = '';
    //     // let p1Card = this.state.p1Deck.shift().point;
    //     // let p2Card = this.state.p2Deck.shift().point;
    //     let p1Card = this.props.p1Deck.shift().point;
    //     let p2Card = this.props.p2Deck.shift().point;

    //     if (p1Card < p2Card){
    //         winner = 'Player Two'
    //     }
    //     else if (p1Card > p2Card) {
    //         winner = 'Player One'
    //     } else if (p1Card === p2Card) {
    //         winner = "no one"
    //     }
    //     console.log(winner)
    //     // this.setState({
    //     //     p1Deck: this.state.p1Deck,
    //     //     p2Deck: this.state.p2Deck,
    //     //     winner: this.winner
    //     // })

    //     // console.log(this.state)
    // }
    
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

