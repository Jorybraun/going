import React from 'react'
import ReactDOM from 'react-dom'
import { MainContainer } from './containers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/modules/root_reducer'
import thunk from 'redux-thunk'


const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <MainContainer />
  </Provider>,
  document.getElementById('app')
)