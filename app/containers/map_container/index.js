import React, { Component } from 'react'
import Map from 'google-maps-react'
import { connect } from 'react-redux'
import { GoogleApiWrapper } from 'google-maps-react'
import { mapLoaded, unloadMap } from '../../redux/modules/map'
import { bindActionCreators } from 'redux'

import { __API_KEY__ } from '../../../secrets'
import { map, mapWrapper } from './style.css'

class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  componentWillReceiveProps(nextProps) {

    if (!this.state.visible && this._checkCoords(nextProps.coordinates)) {
      this.setState({visible: true})

      setTimeout(() => {
        this.props.mapLoaded(this.refs.map)
      }, 100)
    }

    if (this.props.mapLoaded && this.props.mapRefernece) {
      this.props.mapReferece.map.setCenter(nextProps.coordinates)
    }
  }

  componentWillUnmount() {
    this.props.unloadMap()
  }

  _checkCoords(coordinates){
    return coordinates.lat || coordinates.lng
  }

  render () {

    if (this.state.visible) {
      return <Map ref='map'
                   google={this.props.google}
                   className={map}
                   visible={this.state.visible}
                   zoom={14}
                   initialCenter={this.props.coordinates} />
    }

    return null
  }
}

const GoogleMapConnectedApp = GoogleApiWrapper({
  apiKey: __API_KEY__,
})(MapContainer)

const mapStateToProps = (state) => ({
  mapLoaded: state.map.mapLoaded,
  mapReference: state.map.mapReference,
  coordinates: state.map.currentLocation.location
})

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({mapLoaded, unloadMap}, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapConnectedApp)

