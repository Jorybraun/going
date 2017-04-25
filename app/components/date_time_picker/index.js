import React from 'react'
import moment from 'moment'
import { range } from 'lodash'

import DatePicker from 'react-datepicker';

require("react-datepicker/dist/react-datepicker-cssmodules.css")

import { calenderTriggers } from './styles.css';

class DateTimePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment(),
      time: '00',
      currentSelected: false
    }
  }

  selectCurrent (e, type) {
    e.preventDefault()
    if ( type === 'start' ) {
      this.setState({
        currentSelected: this.state.startDate
      })
    }

    if( type === 'end' ) {
      this.setState({
        currentSelected: this.state.endDate
      })
    }
  }

  render () {
    return (
      <div style={{width: '100%'}}>

        <div className={calenderTriggers}>
          <button onClick={(e) => this.selectCurrent(e, 'start')}> {`Pick Start Date`} </button>
          <button onClick={(e) => this.selectCurrent(e, 'end')}> {`Pick End Date`} </button>
        </div>

        { this.state.currentSelected &&
          <DatePicker
            withPortal
            inline
            style={{display: 'flex', flexDirection: 'column'}}
            selected={this.state.currentSelected}
            onChange={this.handleChange} >

            <div style={{width: '100%'}}>
              <select>
                { range(1, 13).map((i) => ( <option key={i}>{i}</option> ) )}
              </select>
            </div>

            <div style={{width: '100%', margin: '25px 0'}}>
              <button
                onClick={() => this.setState({currentSelected: false})}>
                {`Submit`}
              </button>
            </div>

          </ DatePicker>
        }
      </div>
    )
  }
}

export default DateTimePicker

