import React, { Component } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import SessionRequest from '../SessionRequest/SessionRequest.jsx'
import type { SessionsType } from '../../types'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from '@jolt-us/jolt-mobx/lib/connect'

class SessionRequestTable extends Component<*, *> {


  render() {
    const {sessions, getSessionRequests} = this.props

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
              <TableCell align="left">Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sessions.length ? sessions.map((session, i) => {
              const { id, jolter, talk, room, date , hour} = session.session
              console.log(id)
              return(<SessionRequest key={i}
                reqNumber={i}
                id={id}
                jolter={jolter}
                talk={talk}
                room={room}
                date={date}
                hour={hour}
                getSessionRequests={getSessionRequests} />
            )}) : null}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default SessionRequestTable