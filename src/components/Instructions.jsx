import React, { Component } from 'react'
// import Button from '@material-ui/core/Button';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Dialog from '@material-ui/core/Dialog';
// import Typography from '@material-ui/core/Typography';

export class Instructions extends Component {
    render() {
        return (
            <div 
            // style= {{textAlign: 'center'}}
            >
                <h1>How to Play: War</h1>
                <p>Yeah! That card game from childhood, but the React.js version</p>
                <p><strong>Goal:</strong> Be the first player to win all 52 cards</p>
                <h3>DEALING</h3>
                <ol>
                    <li>The deck is divided evenly, with each player receiving 26 cards.</li>
                    <li>Each players stack of cards are face down in front of their name.</li>
                </ol>
                <h3>PLAYING</h3>
                <ol>
                    <li>Each player plays their card and the player with the higher card wins both cards and they are added to their stack.</li>
                    <li>If the cards are the same rank, it is War. </li>
                    <li>The game ends when one player has won all the cards.</li>
                </ol>
            </div>
        )
    }
}

export default Instructions
