import React from 'react'
import { locationWrapper } from './styles.css'

const CurrentLocation = ({currentLocation, searchResults, selectLocation}) => {

  console.log(currentLocation)

  if (searchResults.length > 0) {
    return (
      <ul>
        { searchResults.map((loc, i) => (
          <li onClick={() => selectLocation(loc)} key={i}>
            <div className={locationWrapper}>
              { loc.formatted_address }
            </div>
          </li>
        ))}
      </ul>
    )
  } else if (currentLocation.address) {
    console.log('address')
    return (
      <div className={locationWrapper}> 
        <button> {`+ List`} </button>
        {currentLocation.address}
        <button> {`x Clear`} </button>
      </div>
    )
  } else {
    return null
  }

}

CurrentLocation.propTypes = {
  currentLocation: React.PropTypes.object,
}

export default CurrentLocation
