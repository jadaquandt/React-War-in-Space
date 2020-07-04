import React, { Component } from 'react'
import './Instructions.css'; 
// import Button from '@material-ui/core/Button';
import { 
    List, 
    ListItemText, 
    Typography 
} from '@material-ui/core';

export class Instructions extends Component {
    render() {
        return (
            <div style= {{textAlign: 'center'}}>
                <Typography variant="h4" display="block">How to Play War</Typography>
                <Typography variant="overline" display="block">Yeah! That card game from childhood, but the React.js version</Typography>
                <Typography variant="overline" display="block"><strong>Goal:</strong> Be the first player to win all 52 cards</Typography>
                <Typography variant="h5" display="block">The Deal</Typography>
                <List>
                    <ListItemText>The deck is divided evenly, with each player receiving 26 cards.</ListItemText>
                    <ListItemText>Each player's stack of cards are face down in front of their name.</ListItemText>
                </List>
                <Typography variant="h5" display="block">The Play</Typography>
                <List>
                    <ListItemText>Each player plays their card, the player with the higher card wins both cards and they are added to their stack.</ListItemText>
                    <ListItemText>If the cards are the same rank, it is War. </ListItemText>
                    <ListItemText>For War, each player plays 3 cards face down, then flips the forth to see who has the higher card. The higher card gets the whole stack of 10 cards. </ListItemText>
                    <ListItemText>The game ends when one player has won all the cards.</ListItemText>
                </List>
            </div>
        )
    }
}

export default Instructions
