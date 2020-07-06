//--------------This component renders the game instructions-----------
import React, { Component } from 'react'
import { 
    List, 
    ListItemText, 
    Typography,
    Button
} from '@material-ui/core';

export class Instructions extends Component {
    render() {
        return (
            <div className="instructionsContainer" style= {{textAlign: 'center'}}>
                <Typography variant="h4" display="block">How to Play War</Typography>
                <Typography variant="overline" display="block">Yeah! That card game from childhood, but the React.js version!</Typography>
                <Typography variant="overline" display="block"><strong>Goal:</strong> Be the first player to win all 52 cards</Typography>
                <Typography variant="h5" display="block">The Deal</Typography>
                <List>
                    <ListItemText><Typography variant="overline" display="block">The deck is divided evenly, with each player receiving 26 cards.</Typography></ListItemText>
                    <ListItemText><Typography variant="overline" display="block">Each player's stack of cards are face down in front of their name.</Typography></ListItemText>
                </List>
                <Typography variant="h5" display="block">The Play</Typography>
                <List>
                    <ListItemText><Typography variant="overline" display="block">Each player plays their card, the player with the higher card wins both cards and they are added to their stack.</Typography></ListItemText>
                    <ListItemText><Typography variant="overline" display="block">If the cards are the same rank, it is War. </Typography></ListItemText>
                    <ListItemText><Typography variant="overline" display="block">For <strong>War</strong>, each player plays three additional cards face down, then flips their forth face-up.</Typography></ListItemText>
                    <ListItemText><Typography variant="overline" display="block">The player with the higher card wins the whole stack, taking all the cards.</Typography></ListItemText>
                    <ListItemText><Typography variant="overline" display="block">The game ends when one player has won all the cards.</Typography></ListItemText>
                </List>
                <Typography variant="h5" display="block"><strong>Ready to play?</strong></Typography>
                <a href="/home" style={{ textDecoration: 'none'}}><Button variant="contained" color="primary">Start a new game!</Button></a>
            </div>
        )
    }
}

export default Instructions
