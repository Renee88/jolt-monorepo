import React, { useState } from 'react'
import SessionRequest from '../SessionRequest/SessionRequest.jsx'
import { v4 as uuidv4 } from 'uuid'
import type { RoomType, SessionsType, TalkType, UserType } from '../types'
import { Button, Table, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles'
import SessionRequestModal from '../SessionRequestModal/SessionRequestModal.jsx'
import SessionRequestTable from '../SessionRequestsTable/SessionRequestTable.jsx'

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

const SessionRequests = ({sessions}: {sessions: SessionsType}) => {
  const classes = useStyles()
  
  const [open, setOpen] = useState(false)
  
  const setModalOpen = () => {
    setOpen(true)
    console.log(open)
  }
  
  return (
    <div>
      <Button style={buttonStyle} variant='contained' onClick={setModalOpen}><AddIcon style={{marginRight: 10}}/>New Session Request</Button>
      <p className={classes.title}>Session requests</p>
      <SessionRequestTable sessions={sessions}/>
      <SessionRequestModal open={open} setOpen={setOpen}/>
    </div>
    
  )
}

export default SessionRequests