import React, { Component } from 'react';
import './Table.css';
import CardPlaceholder from './cards/1C.png';

export class Table extends Component {
    render() {
        return (
            <div>
            <div className='table-top'>
                    <div className='playerOne'>
                        <img src={CardPlaceholder} alt=""/>
                        <div>Player One</div>
                        <div>Cards remaining:</div>
                        <button>Play Card</button>
                    </div>
                <div className='playArea'>
                                        
                </div>
                    <div className='playerTwo'>
                        <img src={CardPlaceholder} alt=""/>
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
