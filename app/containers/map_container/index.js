import React, { Component } from 'react'
import Map from 'google-maps-react'
import { map, mapWrapper } from './style.css'
import { connect } from 'react-redux'

class MapContainer extends Component {

  componentDidMount() {
    this.props.passMapState(this.refs.map)
  }

  componentWillReceiveProps(nextProps) {

    if (nextProps.currentLocation !== this.props.currentLocation) {
      let { map } = this.refs.map;
      map.setCenter(nextProps.currentLocation)
    }

  }

  render () {
    return (
      <div className={mapWrapper}>
        <Map
          ref='map'
          google={this.props.google}
          className={map}
          zoom={14}
          initialCenter={this.props.currentLocation}
        />
      </div>
    )
  }
}

MapContainer.propTypes = {
  google: React.PropTypes.object,
}

const mapStateToProps = (state) => ({
  currentLocation: state.map.currentLocation.location
})

export default connect(mapStateToProps, null)(MapContainer)

