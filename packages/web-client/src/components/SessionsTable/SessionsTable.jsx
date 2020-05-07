import React from 'react';
import Session from '../Session/Session.jsx'
import gql from 'graphql-tag';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';



const SessionsTable = ({sessions}) => {

  return (
    <TableContainer id='session-requests-table' aria-label="simple table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Request No.</TableCell>
            <TableCell align="left">Talk</TableCell>
            <TableCell align="left">Room</TableCell>
            <TableCell align="left">Jolter</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Hour</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessions && sessions.length ? sessions.map((session, i) => {
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