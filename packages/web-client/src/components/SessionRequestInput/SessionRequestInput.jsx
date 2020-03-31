import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import type { RoomsType, TalksType, UsersType } from '../types'
import { Menu } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const SessionRequestInput = ({inputType, data}: { inputType: string, data: RoomsType | UsersType | TalksType }) => {
  const classes = useStyles()
  
  const [input, setInput] = useState()
  
  const handleChange = (event) => {
    setInput(event.target.value)
  }
  
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{inputType}</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={input}
        onChange={handleChange}
        label={inputType}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {data.map(item => <MenuItem value={item.id}>{item.name}</MenuItem>)}
      </Select>
    </FormControl>
  
  )
}

export default SessionRequestInput