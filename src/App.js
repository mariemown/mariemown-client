import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import styled from 'styled-components'

import CounterContainer from './containers/CounterContainer'
import HeaderBar from './components/HeaderBar'

import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <HeaderBar/>
        Here is App page!
        <p>
          <Button as={Link} to="/counter">Go to counter</Button>
        </p>
        <Route path="/counter" component={CounterContainer}/>
      </div>
    );
  }
}

export default styled(App)`
  padding: 1em;
`;
