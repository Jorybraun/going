import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { Search } from '../'
import { container, title, slogan, button, searchBar } from './styles.css'

class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  _search (search) {
    this.setState({ search })
  }

  render () {
    const { search } = this.state

    return (
      <div className={container}>
        <h1 className={title}>ARE YOU GOING?</h1>
        <p className={slogan}> You should probably go </p>
        <Search
          className={searchBar}
          placeHolder={'Where are you going?'}
          handleSubmit={(address) => this._search(address)}/>

        { search &&
          <Redirect to={`/search/${search}`} /> }

      </div>
    )
  }
}

export default Welcome