import React, { useState } from 'react'
import SessionRequest from '../SessionRequest/SessionRequest.jsx'
import { v4 as uuidv4 } from 'uuid'
import type { RoomType, TalkType, UserType } from '../types'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles'
import SessionRequestModal from '../SessionRequestModal/SessionRequestModal.jsx'

const useStyles=makeStyles(theme=> ({
  title: {
    textAlign: 'center',
    fontFamily: 'poppins',
    fontSize: 20,
    fontWeight: 'bold'
  }
}))

const buttonStyle = {
  margin: 10,
  backgroundColor: '#4b3fc9',
  color: 'white'
}

const SessionRequests = ({user, talk, room}: { user: UserType, talk: TalkType, room: RoomType }) => {
  const classes = useStyles()
  
  const [open, setOpen] = useState(false)
  const [sessionRequests, setRequests] = useState([])
  
  const setModalOpen = () => {
    setOpen(true)
    console.log(open)
  }
  
  return (
    <div>
      <Button style={buttonStyle} variant='contained' onClick={setModalOpen}><AddIcon style={{marginRight: 10}}/>New Session Request</Button>
      <p className={classes.title}>Session requests</p>
      {sessionRequests.map(sessionRequest => <SessionRequest id={uuidv4()} jolter={user} talk={talk} room={room}/>)}
      <SessionRequestModal open={open} setOpen={setOpen}/>
    </div>
  )
}

export default SessionRequests