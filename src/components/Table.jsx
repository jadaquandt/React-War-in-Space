import React, { Component } from 'react';
// import {
//     BrowserRouter as Router,
//     Route,
//     Redirect,
//   } from 'react-router-dom';
import './Table.css';
// import Deck from './Deck';
import Card from './Card';

export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log(this.state)
    }
    render() {
        return (
            <div>
            <div className='table-top'>
                    <div className='playerOne'>
                       <Card/>
                        <div>Player One</div>
                        <div>Cards remaining:</div>
                        <button>Play Card</button>
                    </div>
                <div className='playArea'>

                </div>
                    <div className='playerTwo'>
                        <img src="" alt=""/>
                        <div>Player Two</div>
                        <div>Cards remaining:</div>
                        <button>Play Card</button>
                    </div>
            </div>
            </div>
        )
    }
}

export default Table
