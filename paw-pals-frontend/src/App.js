import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'
import './App.css';

export default class App extends Component {
  
  render(){
    return (
      <div>
        <HashRouter>
          <Routes />
        </HashRouter>
      </div>
    )
  }
}
