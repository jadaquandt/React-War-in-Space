import React, { Component } from 'react'
//Renders the game title
export class Title extends Component {
    render() {
        return (
            <div className="titleDiv">
                <div className="makeItGlow" id="warTitle">WAR</div>
            </div>
        )
    }
}
export default Title
