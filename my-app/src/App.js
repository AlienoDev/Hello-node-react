import React, { Component } from 'react'
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)

    // initial state
    this.state = {
      open: false,
      text: 'on',
      history: false
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header fixed">
          <h1 className="App-title">My-App</h1>
        </header>
        <div className="footer" id="footer" >

        </div>
      </div>
    );
  }
}

export default App;
