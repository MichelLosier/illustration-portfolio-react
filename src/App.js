import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

import Main from './components/main/main.component';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>         
          <Main/>
        </Router>
      </div>
    );
  }
}

export default App;
