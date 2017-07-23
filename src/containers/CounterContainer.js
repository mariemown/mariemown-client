import { connect } from 'react-redux'

import { increment, decrement } from '../action-creators'
import Counter from '../components/Counter'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onIncrementClick: () => dispatch(increment()),
    onDecrementClick: () => dispatch(decrement()),
  }
}
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default CounterContainer
