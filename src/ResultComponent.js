import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let {result} = this.props;
    return (
        <div classname ="result">
        <p>{result}</p>
        </div>
    );
   
    
  }
}

export default App;