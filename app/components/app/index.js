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

import { container } from './styles.css'

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
      <Switch>
        <Route exact path="/locations/search/" render={() => (
          <div>
            <HeaderMessage currentLocation={currentLocation} searchResults={searchResults} />
            <Search handleSubmit={(address) => getLocation(address)} />
            <SearchResults selectLocation={(location) => setCurrentLocation(location)} results={searchResults} />
            { currentLocation.address &&
              <Redirect
                to={`/locations/${formatAddress(currentLocation.address)}`} />
            }
          </div>
        )}/>

        <Route path="/locations/:location/" render={({match}) => (
          <LocationContainer match={match} />
        )}/>
      </Switch>
    </div>
  )
}



export default App
