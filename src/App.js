import React, { Component } from 'react';
import { connect } from 'react-redux'

import actionCreators from './action-creators'
import './App.css';

function Counter({ counter, onIncrementClick, onDecrementClick }) {
  return (
    <div>
      <span>Counter: {counter}</span>
      <button onClick={onIncrementClick}>+</button>
      <button onClick={onDecrementClick}>-</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => dispatch(actionCreators.increment()),
    onDecrementClick: () => dispatch(actionCreators.decrement()),
  }
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

class App extends Component {
  render() {
    return (
      <div className="App">
        Here is App page
        <CounterContainer/>
      </div>
    );
  }
}

export default App;
