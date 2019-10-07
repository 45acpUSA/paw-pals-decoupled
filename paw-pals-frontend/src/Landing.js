import React, { Component } from 'react'
import './Landing.css'
import PetersCats from './PetersCats.jpg'


export default class Landing extends Component {
  render(){
    return (
      <div>
        <br/>
        <br/>
        <p id='intro'>
          Welcome to Paw Pals, where best friends and play dates are only a match away!
        </p>
        <br/>
        <br/>
        <div id="img">
          <img src={PetersCats} alt="peter's cats sleeping" />
        </div>
      </div>
    )
  }
}