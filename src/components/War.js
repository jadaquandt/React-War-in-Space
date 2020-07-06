//--------------This component is rendered if the players are in "war"-----------
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

export class War extends Component {
    render() {
        return (
            <div style= {{textAlign: 'center', display: "flex", flexDirection: "column"}}>
                <h1 id="itsWar" className="makeItGlowFaster">It's War!</h1>
                <img src="/war.png" alt="War" className="warImg"/>
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
        isWar: () => {dispatch({type: 'WAR'})},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(War);


