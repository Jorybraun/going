import React from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

import { locationWrapper, header, event } from './styles.css'
import transitions from './transitions.css'

const CurrentLocation = ({currentLocation = undefined, clear, children, showEventForm}) => {
  const {address} = currentLocation

  if (typeof address !== undefined) {
    return (
      <div className={locationWrapper}> 
        <div className={header}>
          <button onClick={() => showEventForm()}> {`+ Event`} </button>
            {address}
          <button onClick={() => clear()}> {`x Clear`} </button>
        </div>
        <CSSTransitionGroup
          component="div"
          style={{width: '100%'}}
          transitionName={transitions}
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { children }
        </CSSTransitionGroup>
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
