import React, { Component } from 'react';
import './Table.css';
// import Deck from './Deck';
import Card from './Card';

export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneCards: [
                {point: 6, suit: "H"},
                {point: 6, suit: "H"},
                {point: 6, suit: "H"},
                {point: 6, suit: "H"},
                {point: 6, suit: "H"}
            ]
        }
    }

    playerOnePlay = (e) => {
        e.preventDefault();
        console.log('The link was clicked for Player One.');
        // this.state.playerOneCards.map((card, index) => {
        //     return <Card key={index} {...card} />
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
                        <div>Cards remaining:</div>
                        <button onClick={this.playerOnePlay}>Play Card</button>
                    </div>
                <div className='playArea'>

                </div>
                    <div className='playerTwo'>
                        <div id='playerTwoCard'></div>
                        <div>Player Two</div>
                        <div>Cards remaining:</div>
                        <button onClick={this.playerTwoPlay}>Play Card</button>
                    </div>
            </div>
            </div>
        )
    }
}

export default Table
