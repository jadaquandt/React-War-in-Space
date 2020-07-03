//--------------This component renders a card image-----------
import React, { Component } from 'react';
// import { connect } from 'react-redux';

export class Card extends Component {
    constructor(props) {
        super(props);
        this.point = props.point;
        this.suit = props.suit;

        this.state = {
            message: 'Your Card:'
        }
    
    }

    render() {
        let imgUrl = './cards/' + this.point + this.suit + '.png'
        return (
            <div>
                <p>{this.state.message}</p>
                <img src={imgUrl} alt="Playing Card"/>
            </div>
        )
    }
}

export default Card;

// const mapStateToProps = (state) => {
//     return { 
//         ...state,
//      }
//   };

// export default connect(mapStateToProps)(Card);