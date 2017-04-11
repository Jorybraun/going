import React from 'react'
import { MapContainer } from '../../containers'

import {
  CurrentLocation,
  HeaderMessage,
  Search,
} from '../'

import { container } from './styles.css'



const App = (props) => {

  const {
    currentLocation,
    searchResults,
    isFetching,
    getLocation,
    setCurrentLocation,
    google,
    getMapState,
  } = props

  return (
    <div className={container}>
      <HeaderMessage
        currentLocation={currentLocation}
        searchResults={searchResults}
        isFetching={isFetching} />

      <CurrentLocation
        currentLocation={currentLocation}
        searchResults={searchResults}
        selectLocation={(location) => setCurrentLocation(location)} />

      { ( !currentLocation.address && searchResults.length === 0 ) &&
        <Search handleSubmit={(address) => getLocation(address)} />
      }

      <MapContainer
        google={google}
        passMapState={(map) => getMapState(map)} />



    </div>
  )
}



export default App
