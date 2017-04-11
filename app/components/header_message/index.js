import React from 'react'

const HeaderMessage = ({currentLocation, searchResults, isFetching}) => {
  if (isFetching) { return <h2> '...Searching' </h2> }

  if (searchResults.length < 1 && !currentLocation.address) {
    return  <h2> {'Where Are You Going'} </h2>
  }else if (!currentLocation.address && searchResults.length > 0) {
    return  <h2> {'Did You Mean?'} </h2>
  }

  return null
}

export default HeaderMessage