import { handleActions } from 'redux-actions'

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
}, defaultState)
