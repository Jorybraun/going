import React, { Component } from 'react'

class Search extends Component {

  render() {

    const { handleSubmit } = this.props

    return(
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(this.refs.search.value)
      }}>
        <input ref="search" className='form-control' type='text' />
      </form>
    )
  }
}

export default Search
