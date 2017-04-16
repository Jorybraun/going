import React, { Component } from 'react'

class Search extends Component {

  render() {

    const { handleSubmit, className, placeHolder } = this.props

    return(
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(this.refs.search.value)
      }}>
        <input ref="search" className={className} placeholder={placeHolder} type='text' />
      </form>
    )
  }
}

export default Search
