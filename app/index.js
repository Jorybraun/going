import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/modules/root_reducer'
import thunk from 'redux-thunk'
import App from './app'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept();
}