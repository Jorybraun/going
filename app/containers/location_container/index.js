import React, { Component } from 'react'
import { MapContainer } from '../'
import { CurrentLocation } from '../../components'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAndSetCurrentLocation, clearCurrentLocation } from '../../redux/modules/map'

class LocationContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      clear: false
    }
  }

  componentDidMount () {
    const { currentLocation, match } = this.props

    if (!currentLocation.address) {
      this.props.getAndSetCurrentLocation(match.params.location)
    }
  }

  _clearCurrentLocation () {
    this.props.clearCurrentLocation()
    this.setState({clear: true})
  }

  render () {
    const { currentLocation } = this.props

    if (this.state.clear) {
      return <Redirect to="/locations/search" />
    }

    return (
      <div>
        <CurrentLocation
          clear={() => this._clearCurrentLocation()}
          currentLocation={currentLocation} />
        <MapContainer/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({ getAndSetCurrentLocation, clearCurrentLocation }, dispatch)
)

const mapStateToProps = (state) => ({
  currentLocation: state.map.currentLocation
})

export default connect(mapStateToProps, mapDispatchToProps)(LocationContainer)