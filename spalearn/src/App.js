import React, { Component } from 'react';
// import Table from './components/Table';
import Panel from './components/Panel';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  square = {
    height: '10',
    width: '10'
  };
  squareParametrs = () => {
    console.log(this.square.height, this.square.width);
  };
  render() {
    return (
      <div className='App'>
        <button onClick={this.squareParametrs}>Click me</button>
        <Panel />
        {/* <Table /> */}
      </div>
    );
  }
}

export default App;
