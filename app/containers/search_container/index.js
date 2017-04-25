import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { getAddress, formatAddress } from '../../helpers/map'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import history from 'history'
import * as mapActionCreators from '../../redux/modules/map'

import {
  CurrentLocation,
  HeaderMessage,
  Search,
  SearchResults,
} from '../../components'

import { searchBar, container } from './styles.css'

class SearchContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchResults: [],
      locationSelected: false,
    }
    this._getSearchResults = this._getSearchResults.bind(this)
    this._dispatchCurrentLocation = this._dispatchCurrentLocation.bind(this)
  }

  _getSearchResults (address) {
    getAddress(address).then((data) => {
      const { results } = data.data
      this.setState({ searchResults: results })
      this.props.history.push(`/search/${address}`)
    })
  }

  _dispatchCurrentLocation (location) {
    this.props.setCurrentLocation(location)
    setTimeout(() => this.setState({
      searchResults: []
    }), 100)
  }

  _displayResults (location) {
    const { searchResults } = this.state

    if(searchResults.length < 1){
      this._getSearchResults(location)
    }

    return (
      <SearchResults
        selectLocation={ (location) => this._dispatchCurrentLocation(location) }
        results={searchResults} />
    )
  }

  render () {
    const { searchResults, redirectToLocation, searchTerm } = this.state
    const { isFetching, currentLocation, google, match } = this.props

    if (currentLocation.address) {
      return <Redirect to={`/locations/${formatAddress(currentLocation.address)}`} />
    }

    return (
      <div className={container} >
        <HeaderMessage currentLocation={currentLocation}
          searchResults={searchResults} />

        <Search className={searchBar} handleSubmit={(address) => (
          this._getSearchResults(address))} />

        <Route path="/search/:location" render={({match}) => (
          this._displayResults(match.params.location))}/>
      </div>
    )
  }
}

const MapStateToProps = (state) => ({
  isFetching: state.map.isFetching,
  currentLocation: state.map.currentLocation
})

const MapDispatchToProps = (dispatch) => (
  bindActionCreators(mapActionCreators, dispatch)
)

export default connect(MapStateToProps, MapDispatchToProps)(SearchContainer)