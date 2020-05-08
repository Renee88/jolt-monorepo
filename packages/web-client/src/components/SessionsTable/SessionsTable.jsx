import React from 'react';
import Session from '../Session/Session.jsx'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';






const SessionsTable = ({sessions, refetch}) => {

  const { jolters, talks, rooms } = useSelector(state => state)

  useEffect(()=>{
    refetch()
  }, [])
  
  return (
    <TableContainer id='session-requests-table' aria-label="simple table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Request No.</TableCell>
            <TableCell align="left">Talk</TableCell>
            <TableCell align="left">Room</TableCell>
            <TableCell align="left">Volter</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Hour</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessions.length ? sessions.map((session, i) => {
            const { id, jolterID, talkID, roomID, date, hour, status } = session
            return (<Session key={i}
              reqNumber={i + 1}
              id={id}
              jolterID={jolterID}
              talkID={talkID}
              roomID={roomID}
              date={date}
              hour={hour}
              status={status} />
            )
          }) : null}
        </TableBody>
      </Table>
    </TableContainer>
  )
}


export default SessionsTable