import React from 'react'

const LocationItem = ({location}) => {
  return (
    <div className='d-flex w-100 justify-content-between'>
      <h5 className='mb-1'>{ location.title }</h5>
      <small>{`last viewed: ${location.lastViewed}`}</small>
    </div>
  )
}

LocationItem.propTypes = {
  location: React.PropTypes.object,
}

export default LocationItem
