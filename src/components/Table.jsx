import React, { Component } from 'react';
import './Table.css';
// import CardPlaceholder from 'cards/1C.png'
// import Card from './Card';

export class Table extends Component {
    render() {
        return (
            <div>
            <div className='table-top'>
                    <div className='playerOne'>
                        <img src='./cards/1C.png' alt=""/>
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
