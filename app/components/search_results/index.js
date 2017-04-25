import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import { locationWrapper, resultList } from './styles.css'
import transitions from './transitions.css'

const SearchResults = ({results = [], selectLocation}) => (
  <CSSTransitionGroup
    component="ul"
    className={resultList}
    transitionName={transitions}
    transitionAppear={true}
    transitionEnter={true}
    transitionAppearTimeout={500}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={300}>

    { results.map((loc, i) => (
      <li onClick={() => selectLocation(loc)} key={i}>
        <div className={locationWrapper}>
          { loc.formatted_address }
        </div>
      </li>
    ))}

   </CSSTransitionGroup>
)







export default SearchResults
