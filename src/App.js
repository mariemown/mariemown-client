import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import CounterContainer from './containers/CounterContainer'

import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        Here is App page!
        <p>
          <Button as={Link} to="/counter">Go to counter</Button>
        </p>
        <Route path="/counter" component={CounterContainer}/>
      </div>
    );
  }
}

export default App;
