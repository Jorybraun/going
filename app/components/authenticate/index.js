import React from 'react'
import { container, header, button, subHeader} from './styles.css'
import {Redirect} from 'react-router-dom'

const Authenticate = ({onAuth, isFetching, error, isAuthed}) => {

  if (isAuthed) {
    return (
      <Redirect to={{ pathname: '/locations' }}/>
    )
  }

  return (
    <div className={container}>
      <h1 className={header}> {'Sign In Or Sign Up'} </h1>
      <p className={subHeader}> {'Or else go Away'} </p>
      <button className={button} onClick={() => onAuth()}>
        {isFetching ? '...loading' : 'Authenticate'}
      </button>
    </div>
  )
}

Authenticate.propTypes = {
  onAuth: React.PropTypes.func.isRequired,
  error: React.PropTypes.string.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  isAuthed: React.PropTypes.bool.isRequired
}

export default Authenticate
