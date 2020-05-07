import React, { useState } from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers'
import { useEffect } from 'react'

const DatePicker = ({ getDateInput, getHourInput }: { getDateInput: (date: string) => void, getHourInput: (hour: string) => void }) => {

  const today = new Date()
  const [selectedDate, setDateInput] = useState(today)
  const [selectedHour, setHourInput] = useState(today)

  const getHour = (selectedHour) => {
    const minutes = parseInt(selectedHour.getMinutes()) < 10 ? '0' + selectedHour.getMinutes() : selectedHour.getMinutes()
    const hours = parseInt(selectedHour.getHours()) < 10 ? '0' + selectedHour.getHours() : selectedHour.getHours()
    const hour = hours + ':' + minutes
    return hour
  }

  const getDay = (selectedDate) => {
    const month = selectedDate.getMonth() + 1
    const day = selectedDate.getDate() + '/' + month + '/' + selectedDate.getFullYear()
    return day
  }

  const handleDateChange = (date) => {
    const fullDate = new Date(date)
    setDateInput(fullDate)
    const day = getDay(fullDate)
    getDateInput(day)
  }

  const handleHourChange = (date) => {
    const fullDate = new Date(date)
    setHourInput(fullDate)
    const hour = getHour(fullDate)
    getHourInput(hour)
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
          label="Date"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time"
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