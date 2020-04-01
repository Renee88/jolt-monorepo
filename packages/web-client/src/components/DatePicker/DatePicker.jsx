import React, { useState } from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers'

const DatePicker = ({setSelectedDate, setSelectedHour}: { setSelectedDate: (string) => void, setSelectedHour: (string)=> void }) => {
  
  const today = new Date()
  const [selectedDate, setDateInput] = useState(today)
  const [selectedHour, setHourInput] = useState(today)
  
  const handleDateChange = (date) => {
    const fullDate = new Date(date)
    const month = fullDate.getMonth() + 1
    const day = fullDate.getDate() + '/' + month + '/' + fullDate.getFullYear()
    setDateInput(day)
    console.log(day)
    setSelectedDate(day)
  }
  
  const handleHourChange = (date) => {
    const fullDate = new Date(date)
    const hour = fullDate.getHours() + ':' + fullDate.getMinutes()
    setHourInput(fullDate)
    setSelectedHour(hour)
  }
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedHour}
          onChange={handleHourChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

export default DatePicker