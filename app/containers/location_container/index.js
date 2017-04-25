import React, { Component } from 'react'
import { MapContainer, NewEventContainer } from '../'
import { CurrentLocation } from '../../components'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { container, mapContainer } from './styles.css'
import { getAndSetCurrentLocation, clearCurrentLocation } from '../../redux/modules/map'

class LocationContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      clear: false,
      eventFormVisible: false
    }
  }

  componentDidMount () {
    const { currentLocation, match } = this.props

    if (!currentLocation.address) {
      this.props.getAndSetCurrentLocation(match.params.location)
    }
  }

  componentWillUnmount() {
    this.props.clearCurrentLocation()
  }

  _showEventForm () {
    this.setState({
      eventFormVisible: !this.state.eventFormVisible,
    })
  }

  _addNewEvent () {

  }

  _clearCurrentLocation () {
    this.props.clearCurrentLocation()
    this.setState({clear: true})
  }

  render () {
    const { currentLocation } = this.props

    if (this.state.clear) {
      return <Redirect to="/search" />
    }

    return (
      <div className={container}>
        <div className={mapContainer}>
          <MapContainer/>
        </div>
        <CurrentLocation
          clear={() => this._clearCurrentLocation()}
          showEventForm={() => this._showEventForm()}
          currentLocation={currentLocation}>

          { this.state.eventFormVisible &&
            <NewEventContainer />
          }

        </CurrentLocation>
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