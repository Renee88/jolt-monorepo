import React, { useState } from 'react'
import { Button, Modal } from '@material-ui/core'
import SessionRequestInput from '../SessionRequestInput/SessionRequestInput.jsx'
import SendIcon from '@material-ui/icons/Send'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    display: 'flex',
    width: '40vw',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

const SessionRequestModal = ({open, setOpen}: { open: boolean, setOpen: any }) => {
  const classes = useStyles()
  
  const {users, rooms, talks} = useSelector(state => state)
  
  const handleClose = () => {
    setOpen(false)
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
        <SessionRequestInput inputType='jolter' data={users}/>
        <SessionRequestInput inputType='talk' data={talks}/>
        <SessionRequestInput inputType='room' data={rooms}/>
        <Button><SendIcon/>Submit</Button>
      </div>
    </Modal>
  )
}

export default SessionRequestModal