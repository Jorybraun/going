import React, { Component } from 'react'

import { getAddress } from '../../helpers/map'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as mapActionCreators from '../../redux/modules/map'
import { Redirect } from 'react-router-dom'

import { App } from '../../components'

class AppContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      searchResults: [],
      locationSelected: false
    }

    this._getSearchResults = this._getSearchResults.bind(this)
    this._dispatchCurrentLocation = this._dispatchCurrentLocation.bind(this)
  }

  _getSearchResults (address) {
    getAddress(address).then((data) => {
      const { results } = data.data
      this.setState({searchResults: results})
    })
  }

  _dispatchCurrentLocation (location) {
    this.props.setCurrentLocation(location)
    setTimeout(() => this.setState({
      searchResults: [],
    }), 100)
  }

  render () {

    const { searchResults, redirectToLocation } = this.state
    const { isFetching, currentLocation, google, match, history } = this.props


    return <App isFetching={this.props.isFetching}
                searchResults={searchResults}
                currentLocation={currentLocation}
                getLocation={this._getSearchResults.bind(this)}
                setCurrentLocation={this._dispatchCurrentLocation.bind(this)} />
  }
}

const MapStateToProps = (state) => ({
  isFetching: state.map.isFetching,
  currentLocation: state.map.currentLocation
})

const MapDispatchToProps = (dispatch) => (
  bindActionCreators(mapActionCreators, dispatch)
)

export default connect(MapStateToProps, MapDispatchToProps)(AppContainer)


// componentDidMount() {
//   const { currentLocation: { address: currentAddress },
//           match: { params: { location: urlAddress } }
//         } = this.props

//   if(typeof urlAddress !== undefined)

//   this._matchAdresses(currentAddress, urlAddress) && this._getLocation(urlAddress)

// }

// _matchAdresses (currentAddress, urlAddress) {
//   if(typeof currentAddress !== undefined) {
//     return formatAddress(currentAddress) === formatAddress(urlAddress)
//   }
//   return typeof urlAddress !== undefined
// }

