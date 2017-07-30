import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'

import reducers from '../reducers'
import history from '../history'

const enhancer = process.env.NODE_ENV === 'production' ?
  applyMiddleware(routerMiddleware(history)) :
  compose(
    applyMiddleware(routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

export default createStore(
  reducers,
  enhancer,
)
