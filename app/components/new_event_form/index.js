import React from 'react'
import { form, fieldset } from './styles.css'
import { DateTimePicker } from '../'

class NewEventForm extends React.Component {

  render () {
    return (
      <form className={form}>
        <div className={fieldset}>
          <label htmlFor="title">Event Title :</label>
          <input name="title" type="text"/>
        </div>

        <div className={fieldset}>
          <label htmlFor="address">Event Address :</label>
          <input name="address" type="text"/>
        </div>

        <div className={fieldset} styles={{marginRight: 'auto'}}>
          <DateTimePicker />
        </div>

        <input  type="submit"/>
      </form>
    )
  }
}

export default NewEventForm