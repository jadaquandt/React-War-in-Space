import React, { Component } from 'react';
import './Table.css';
// import Deck from './Deck';
// import Card from './Card';

export class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
            <div className='table-top'>
                    <div className='playerOne'>
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
