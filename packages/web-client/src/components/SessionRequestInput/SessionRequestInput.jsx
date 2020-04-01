import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import type { RoomsType, RoomType, TalksType, TalkType, UsersType, UserType } from '../types'
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

const SessionRequestInput = ({inputType, data, setField}: { inputType: string, data: RoomsType | UsersType | TalksType,
  setField: (any)=> void }) => {
  
  const classes = useStyles()
  
  const [input, setInput] = useState()
  const [open, setOpen] = useState(false)
  
  const handleOpen = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
  }
  
  const handleChange = (event) => {
    const id = event.target.value
    setInput(id)
    const chosenItem = data.find(item => item.id === id )
    setField(chosenItem)
  }
  
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id={inputType}>{inputType}</InputLabel>
      <Select
        labelId={inputType}
        value={input ? input : ''}
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        onChange={handleChange}
        label={inputType}
      >
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        {data.map((item,i) => <MenuItem key={i} value={item.id}>{item.name}</MenuItem>)}
      </Select>
    </FormControl>
  
  )
}

export default SessionRequestInput