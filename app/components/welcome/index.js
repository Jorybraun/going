import React from 'react'
import { container, title, slogan, button } from './styles.css'

const Welcome = () => (
  <div className={container}>
    <h1 className={title}>ARE YOU GOING?</h1>
    <p className={slogan}> Where are you going? </p>
    <button className={button}> You Should Probably Go </button>
  </div>
)

export default Welcome