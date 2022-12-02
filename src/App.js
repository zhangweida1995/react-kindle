import React, { Component } from 'react'
import './App.css';
import RadioBroad from './components/RadioBroad';
import Time from './components/Time';
import Weather from './components/Weather';

export default class App extends Component {

  render() {
    return (
      <div className='App'>
        <Time />
        <Weather />
        <RadioBroad />
      </div>
    )
  }
}
