import React from 'react'
import { locationWrapper } from './styles.css'

const SearchResults = ({results = [], selectLocation}) => (
  <ul>
    { results.map((loc, i) => (
      <li onClick={() => selectLocation(loc)} key={i}>
        <div className={locationWrapper}>
          { loc.formatted_address }
        </div>
      </li>
    ))}
  </ul>
)


export default SearchResults
