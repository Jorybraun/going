import React from 'react'
import LocationItem from '../location_item'
import { locationList, listGroup, listGroupItem } from './styles.css'

const LocationList = ({locations}) => {
  return (
    <div className={locationList}>
      <h2>{'Saved Locations'}</h2>
      <ul className={listGroup}>
      {locations.map((loc, i) => {
        return <li className={listGroupItem} key={i}><LocationItem location={loc} /></li>
      })}
      </ul>
    </div>
  )
}

LocationList.propTypes = {
  locations: React.PropTypes.array,
}

export default LocationList
