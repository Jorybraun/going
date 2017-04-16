import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigation } from '../../components'
import { outerContainer, innerContainer } from './styles.css'

import {
  WelcomeContainer,
  AuthenticateContainer,
  SearchContainer,
  LocationContainer
} from '../'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class MainContainer extends Component {
  render () {
    return (
      <div className={outerContainer}>
        <Router>
          <div className={innerContainer}>
            <Navigation isAuthed={this.props.isAuthed} />
            <Route exact path="/" component={WelcomeContainer} />
            <Route path="/search" component={SearchContainer} />
            <Route path="/authenticate" component={AuthenticateContainer} />
            <Route path="/locations/:location" component={LocationContainer} />
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
