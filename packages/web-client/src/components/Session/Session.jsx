import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import { gql } from 'apollo-boost';
import type { SessionProps } from '../../types'
import { TableCell, TableRow, Button } from '@material-ui/core'
import SessionStatusMenu from '../SessionStatusMenu/SessionStatusMenu.jsx'


const buttonStyle = {
  APPROVED: {
    color: 'green'
  },
  CANCELED: {
    color: 'red'
  }
}

const UPDATE_SESSION_STATUS = gql`
mutation updateSessionStatus($id: String!, $status: String!) {
  updateSessionStatus(id: $id, status: $status) {
    id
    status
  }
}
`

const Session = ({ reqNumber, id, jolterID, talkID, roomID, date, hour, status }: SessionProps) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [sessionStatus, setSessionStatus] = useState(status)
  const [updateSessionStatus, { data }] = useMutation(UPDATE_SESSION_STATUS)
  const { jolters, talks, rooms } = useSelector(state => state)

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget)
  }

  const setStatus = (id, status) => {
    setSessionStatus(status)
    updateSessionStatus({ variables: { id, status } })
  }

  const jolter = jolters.find(jolter => jolter.id === jolterID)
  const talk = talks.find(talk => talk.id === talkID)
  const room = rooms.find(room => room.id === roomID)


  return (
    talk && jolter && room ?
    <TableRow>
      <TableCell component="th" scope="row">
        {reqNumber}
      </TableCell>
      <TableCell align="left">{talk.name}</TableCell>
      <TableCell align="left">{room.name}</TableCell>
      <TableCell align="left">{jolter.name}</TableCell>
      <TableCell align="left">{date}</TableCell>
      <TableCell align="left">{hour}</TableCell>
      {status === 'APPROVED' ? <TableCell className='approved' align="left"
        onClick={handleClick}><Button style={buttonStyle[status]}>{status}</Button></TableCell> :
        status === 'CANCELED' ? <TableCell className='canceled' align="left"
          onClick={handleClick}><Button style={buttonStyle[status]}>{status}</Button></TableCell> : null}
      <SessionStatusMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} setStatus={setStatus} sessionID={id} />
    </TableRow> : null
  )
}

export default Session;