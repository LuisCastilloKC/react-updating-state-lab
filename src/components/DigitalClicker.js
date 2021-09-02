// Code DigitalClicker Component Here
 import React, { Component } from 'react';

 class DigitalClicker extends Component {
    constructor(){
        super()

        this.state ={
            timesClicked: 0,
        }
    };

    digitalBtn = () =>{
        this.setState((firstState) =>{
            return {
                timesClicked: firstState.timesClicked + 1,
            }
        })
    }

    render(){
        return(
            <button onClick={this.digitalBtn}>{this.state.timesClicked}</button>
        )
    }

 }

 export default DigitalClicker;