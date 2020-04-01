import React, { useEffect, useState } from 'react'
import { Button, Modal } from '@material-ui/core'
import SessionRequestInput from '../SessionRequestInput/SessionRequestInput.jsx'
import SendIcon from '@material-ui/icons/Send'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { addSessionRequest } from '../../actions/AddSessionRequest'
import { v4 as uuidv4 } from 'uuid'
import DatePicker from '../DatePicker/DatePicker.jsx'
import type { UserType } from '../types'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    width: '40vw',
    height: '30vh',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  requestInputs: {
    display: 'flex'
  },
  successMessage: {
    color: 'green',
    textAlign: 'center',
    fontFamily: 'poppins'
  }
}))

const SessionRequestModal = ({open, setOpen}: { open: boolean, setOpen: any }) => {
  const classes = useStyles()
  
  const {users, rooms, talks} = useSelector(state => state)
  const dispatch = useDispatch()
  
  const [added, setAdded] = useState(false)
  
  const [jolter, setJolter] = useState({
    id: '',
    name: '',
    age: undefined,
    email: '',
    picture: '',
    dogs: []
  })
  
  const [talk, setTalk] = useState({
    id: '',
    name: '',
    transcript: ''
  })
  
  const [room, setRoom] = useState({
    id: '',
    name: '',
    participants: []
  })
  
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  
  const [session, setSession] = useState({
    id: '',
    jolter: {},
    talk: {},
    room: {},
    date: ''
  })
  
  const handleClose = () => {
    setOpen(false)
  }
  
  const addSession = () => {
    const newSession = {
      id: uuidv4(),
      jolter: jolter,
      talk: talk,
      room: room,
      date: date + ' ' + hour
    }
    setSession(newSession)
    setAdded(true)
    dispatch(addSessionRequest(newSession))
  }
  
  return (
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div className={classes.paper}>
        <div id='session-request-inputs' className={classes.requestInputs}>
          <SessionRequestInput inputType='jolter' data={users} setField={setJolter}/>
          <SessionRequestInput inputType='talk' data={talks} setField={setTalk}/>
          <SessionRequestInput inputType='room' data={rooms} setField={setRoom}/>
        </div>
        <DatePicker setSelectedDate={setDate} setSelectedHour={setHour}/>
        <Button onClick={() => addSession()}><SendIcon/>Submit</Button>
        {added ? <p className={classes.successMessage}>Session request was added successfully</p> : null}
      </div>
    </Modal>
  )
}

export default SessionRequestModal