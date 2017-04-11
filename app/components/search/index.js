import React, { Component } from 'react'

class Search extends Component {

  render() {

    const { handleSubmit } = this.props

    return(
      <form onSubmit={(e) => {
        console.log(this.refs.search.value)
        e.preventDefault()
        handleSubmit(this.refs.search.value)
      }}>
        <input ref="search" className='form-control' type='text' />
      </form>
    )
  }
}

export default Search
