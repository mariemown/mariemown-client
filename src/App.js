import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import CounterContainer from './containers/CounterContainer'

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        Here is App page!
        <p>
          <Link to="/counter">Go to counter</Link>
        </p>
        <Route path="/counter" component={CounterContainer}/>
      </div>
    );
  }
}

export default App;
