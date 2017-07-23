import { handleActions } from 'redux-actions'
import { LOCATION_CHANGE, routerReducer } from 'react-router-redux'

import { increment, decrement } from '../action-creators'

const defaultState = {
  counter: 0
}

export default handleActions({
  [increment](state) {
    return {
      counter: state.counter + 1
    }
  },
  [decrement](state) {
    return {
      counter: state.counter - 1
    }
  },
  [LOCATION_CHANGE]: routerReducer,
}, defaultState)
