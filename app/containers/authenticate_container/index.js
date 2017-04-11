import React, { Component, PropTypes } from 'react'
import { Authenticate } from '../../components'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as userActionCreators from '../../redux/modules/users'

class AuthenticateContainer extends Component {

  _handleAuth () {
    this.props.fetchAndHandleAuthUser()
  }

  render () {
    return (
      <Authenticate
        onAuth={() => this._handleAuth()}
        error={this.props.error || ''}
        isFetching={this.props.isFetching}
        isAuthed={this.props.isAuthed}/>
    )
  }
}

AuthenticateContainer.propTypes = {
  fetchAndHandleAuthUser: React.PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isAuthed: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  error: state.users.error,
  isFetching: state.users.isFetching,
  isAuthed: state.users.isAuthed,
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(userActionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)

