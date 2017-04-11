import React, { Component } from 'react'
import { connect } from 'react-redux'

import { AppContainer } from '../'
import { WelcomeContainer } from '../'
import { AuthenticateContainer } from '../'
import { Navigation } from '../../components'
import { outerContainer, innerContainer } from './styles.css'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class MainContainer extends Component {
  render () {
    return (
      <div className={outerContainer}>
        <Router>
          <div className={innerContainer}>
            <Navigation isAuthed={this.props.isAuthed} />
            <Switch>
              <Route exact path="/" component={WelcomeContainer} />
              <Route path="/authenticate" component={AuthenticateContainer} />
              <Route path="/locations/" component={AppContainer} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthed: state.users.isAuthed
})

export default connect(mapStateToProps,null)(MainContainer)
