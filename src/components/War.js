//--------------This component is rendered if the players are in "war"-----------
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

export class War extends Component {
    render() {
        return (
            <div style= {{textAlign: 'center'}}>
                <h1>It's War!</h1>
            <Button onClick={() => {this.props.isWar()}} variant="contained" color="primary">
            Click to Battle!
            </Button>
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
        isWar: () => {dispatch({type: 'WAR'})},
        howToPlay: () => {dispatch({type: 'GAME_INSTRUCTIONS'})},
    }
}

// export default War;

export default connect(mapStateToProps, mapDispatchToProps)(War);


