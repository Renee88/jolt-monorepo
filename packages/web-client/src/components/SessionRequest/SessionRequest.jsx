import React, { useState } from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import type { RoomType, TalkType, UserType } from '../types'

const SessionRequest = ({reqNumber, jolter, talk, room, date}: { reqNumber: number, jolter: UserType, talk: TalkType, room: RoomType, date: string }) => {
  
  const [status, setStatus] = useState('PENDING')
  
  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {reqNumber}
      </TableCell>
      <TableCell align="left">{talk.name}</TableCell>
      <TableCell align="left">{room.name}</TableCell>
      <TableCell align="left">{jolter.name}</TableCell>
      <TableCell align="left">{date}</TableCell>
      {status === 'PENDING' ? <TableCell style={{color: 'orange'}} align="left">{status}</TableCell> :
        status === 'APPROVED' ? <TableCell style={{color: 'green'}} align="left">{status}</TableCell> :
          status === 'DECLINED' ? <TableCell style={{color: 'red'}} align="left">{status}</TableCell> : null}
    </TableRow>
  )
  
}

export default SessionRequest