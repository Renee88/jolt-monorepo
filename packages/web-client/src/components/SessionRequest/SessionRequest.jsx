import React, { useState } from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import type { RoomType, TalkType, UserType, Props, OwnProps } from '../../types'
import SessionRequestStatusMenu from '../SessionRequestStatusMenu/SessionRequestStatusMenu.jsx'
import { makeStyles } from '@material-ui/core/styles'
import {connect as connectRedux} from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from '@jolt-us/jolt-mobx/lib/connect'
import { Component } from 'react'
import { Button } from '@material-ui/core'
import './SessionRequest.css'

const buttonStyle = {
  APPROVED: {
    color: 'green'
  },
  DECLINED: {
    color: 'red'
  },
  PENDING: {
    color: 'orange'
  }
}

@connect((store: any) => ({
  updateRequestStatus: store.sessionRequestsStore.updateRequestStatus,
  removeSessionRequest: store.sessionRequestsStore.removeSessionRequest
}))
class SessionRequest extends Component<*, *> {


  constructor() {
    super()
    this.state = {
      status: 'PENDING',
      anchorEl: null
    }
  }

  setSessionRequestStatus = async (id: string, status: string) => {
    await this.props.updateRequestStatus(id, status)
    this.props.getSessionRequests()
  }

  setAnchorEl = (anchorEl: any) => {
    this.setState({ anchorEl })
  }

  removeSessionRequest = async (id: string) => {
    await this.props.removeSessionRequest(id)
    this.props.getSessionRequests()
  }


  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setAnchorEl(event.currentTarget)
  }



  render() {
    const { reqNumber, id, jolterID, talkID, roomID, date, hour, rooms, talks, jolters, status } = this.props
    const { anchorEl } = this.state

    const talk = talks.find(talk => talk.id === talkID)
    const jolter = jolters.find(jolter => jolter.id === jolterID)
    const room = rooms.find(room => room.id === roomID)


    return (
      talk && room && jolter ?
      <TableRow>
        <TableCell component="th" scope="row">
          {reqNumber}
        </TableCell>
        <TableCell align="left">{talk.name}</TableCell>
        <TableCell align="left">{room.name}</TableCell>
        <TableCell align="left">{jolter.name}</TableCell>
        <TableCell align="left">{date}</TableCell>
        <TableCell align="left">{hour}</TableCell>
        {status === 'PENDING' ? <TableCell className='pending' align="left"
          onClick={this.handleClick}><Button style={buttonStyle[status]}>{status}</Button></TableCell> :
          status === 'APPROVED' ? <TableCell className='approved' align="left"
            onClick={this.handleClick}><Button style={buttonStyle[status]}>{status}</Button></TableCell> :
            status === 'DECLINED' ? <TableCell className='declined' align="left"
              onClick={this.handleClick}><Button style={buttonStyle[status]}>{status}</Button></TableCell> : null}
        <SessionRequestStatusMenu anchorEl={anchorEl} setAnchorEl={this.setAnchorEl} setStatus={this.setSessionRequestStatus} sessionRequestID={id} />
        <TableCell className="delete-icon" align="left" onClick={() => this.removeSessionRequest(id)}><DeleteIcon /></TableCell>
      </TableRow> : null
    )
  }


}

const mapStateToProps = (state) => {
  return {
    jolters: state.jolters,
    talks: state.talks,
    rooms: state.rooms
  }
}

//$FlowFixMe
export default connectRedux(mapStateToProps)(SessionRequest)