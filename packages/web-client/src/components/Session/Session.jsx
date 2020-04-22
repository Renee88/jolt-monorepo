import React from 'react';
import {TableCell, TableRow, Button} from '@material-ui/core'
import StatusMenu from '../StatusMenu/StatusMenu.jsx'
import type {SessionProps} from '../../types'
import { useState } from 'react';

const buttonStyle = {
  APPROVED: {
    color: 'green'
  },
  CANCELED: {
    color: 'red'
  }
}

const Session = ({reqNumber,id, jolterID, talkID, roomID, date, hour, status}: SessionProps) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [sessionStatus, setSessionStatus] = useState(status)

  const handleClick = (e) => {

  }

    return(
        <TableRow>
        <TableCell component="th" scope="row">
          {reqNumber}
        </TableCell>
        <TableCell align="left">{talkID}</TableCell>
        <TableCell align="left">{roomID}</TableCell>
        <TableCell align="left">{jolterID}</TableCell>
        <TableCell align="left">{date}</TableCell>
        <TableCell align="left">{hour}</TableCell>
        {status === 'APPROVED' ? <TableCell className='approved' align="left"
            onClick={handleClick}><Button style={buttonStyle[status]}>{status}</Button></TableCell> :
            status === 'CANCELED' ? <TableCell className='canceled' align="left"
              onClick={handleClick}><Button style={buttonStyle[status]}>{status}</Button></TableCell> : null}
        <StatusMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} setStatus={setSessionStatus} />
      </TableRow>
    )
}

export default Session;