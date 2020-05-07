import React, { Component } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import SessionRequest from '../SessionRequest/SessionRequest.jsx'
import type { SessionsType } from '../../types'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from '@jolt-us/jolt-mobx/lib/connect'


class SessionRequestTable extends Component<*, *> {


  render() {
    const {sessionRequests, getSessionRequests} = this.props
    
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
            {sessionRequests.length ? sessionRequests.map((sessionRequest, i) => {
              const { id, jolterID, talkID, roomID, date , hour, status} = sessionRequest
              return(<SessionRequest key={i}
                reqNumber={i + 1}
                id={id}
                jolterID={jolterID}
                talkID={talkID}
                roomID={roomID}
                date={date}
                hour={hour}
                status={status}
                getSessionRequests={getSessionRequests}/>
            )}) : null}
          </TableBody>
        </Table>
      </TableContainer> 
    )
  }
}

export default SessionRequestTable