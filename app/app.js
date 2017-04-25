import React from 'react'
import { Provider } from 'react-redux'
import { MainContainer } from './containers'

const App = ({store}) => (
  <Provider store={store}>
    <MainContainer />
  </Provider>
)

export default App