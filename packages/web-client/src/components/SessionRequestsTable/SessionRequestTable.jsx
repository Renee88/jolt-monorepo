import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import SessionRequest from '../SessionRequest/SessionRequest.jsx'
import type { SessionsType } from '../types'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650
  }
}))

const SessionRequestTable = ({sessions}: { sessions: SessionsType }) => {
  const classes = useStyles()
  
  return (
    <TableContainer className={classes.table} aria-label="simple table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Request No.</TableCell>
            <TableCell align="left">Talk</TableCell>
            <TableCell align="left">Room</TableCell>
            <TableCell align="left">Jolter</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessions.map((session, i) => <SessionRequest key={i}
                                                        reqNumber={i}
                                                        jolter={session.jolter}
                                                        talk={session.talk}
                                                        room={session.room}
                                                        date={session.date}/>)}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SessionRequestTable