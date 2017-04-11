import React, { Component } from 'react'

import { __API_KEY__ } from '../../../secrets'
import { GoogleApiWrapper } from 'google-maps-react'
import { getAddress } from '../../helpers/map'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as mapActionCreators from '../../redux/modules/map'

import { App } from '../../components'

class AppContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      map: '',
      searchResults: []
    }

    this._getLocation = this._getLocation.bind(this)
    this._getMapState = this._getMapState.bind(this)
    this._setCurrentLocation = this._setCurrentLocation.bind(this)
  }

  _getMapState (map) {
    this.setState({map})
  }

  _getLocation (address) {
    getAddress(address).then((data) => {
      const { results } = data.data
      this.setState({searchResults: results})
    })
  }

  _setCurrentLocation (location) {
    this.props.setCurrentLocation(location)
    this.setState({searchResults: []})
  }

  render () {

    const { searchResults } = this.state
    const { isFetching, currentLocation, google, match } = this.props

    return <App google={google}
                match={match}
                isFetching={false}
                searchResults={searchResults}
                currentLocation={currentLocation}
                getLocation={this._getLocation.bind(this)}
                getMapState={this._getMapState.bind(this)}
                setCurrentLocation={this._setCurrentLocation.bind(this)} />
  }
}

const GoogleMapConnectedApp = GoogleApiWrapper({
  apiKey: __API_KEY__,
})(AppContainer)

const MapStateToProps = (state) => ({
  isFetching: state.map.isFetching,
  currentLocation: state.map.currentLocation
})

const MapDispatchToProps = (dispatch) => (
  bindActionCreators(mapActionCreators, dispatch)
)

export default connect(MapStateToProps, MapDispatchToProps)(GoogleMapConnectedApp)

