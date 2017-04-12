import React from 'react'
import { locationWrapper } from './styles.css'

const CurrentLocation = ({currentLocation = undefined, clear}) => {
  const {address} = currentLocation

  if (typeof address !== undefined) {
    return (
      <div className={locationWrapper}> 
        <button> {`+ List`} </button>
        {address}
        <button onClick={() => clear()}> {`x Clear`} </button>
      </div>
    )
  } else {
    return null
  }

}

CurrentLocation.propTypes = {
  address: React.PropTypes.object,
}

export default CurrentLocation
