import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { formatAddress } from '../../helpers/map'
import { MapContainer, LocationContainer } from '../../containers'
import {
  CurrentLocation,
  HeaderMessage,
  Search,
  SearchResults,
} from '../'

// TODO rename this to location container

import { container, searchBar } from './styles.css'

const App = (props) => {

  const {
    currentLocation,
    searchResults,
    isFetching,
    getLocation,
    setCurrentLocation,
  } = props

  return (
    <div className={container}>
      <Route path="/locations/:location/" render={({match}) => (
        <LocationContainer match={match} />
      )}/>
    </div>
  )
}



export default App
