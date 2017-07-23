import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux'

import App from './App';
import store from './store'
import history from './history';
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <NextApp />
          </ConnectedRouter>
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}

registerServiceWorker()
