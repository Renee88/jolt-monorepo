import React, { useState } from 'react'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import type { RoomType, TalkType, UserType } from '../../types'
import StatusMenu from '../StatusMenu/StatusMenu.jsx'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from '@jolt-us/jolt-mobx/lib/connect'
import { Component } from 'react'
import './SessionRequest.css'

@connect((store: any)=> ({
  removeSessionRequest: store.sessionsStore.removeSessionRequest
}))
  class SessionRequest extends Component <*,*> {


    constructor(){
      super()
      this.state = {
        status: 'PENDING',
        anchorEl: null
      }
    }

    setRequestStatus = (status) => {
      this.setState({status})
    }

    setAnchorEl = (anchorEl) => {
      this.setState({anchorEl})
    }

    removeSessionRequest = (id) => {
      this.props.removeSessionRequest(id)
      this.props.getSessionRequests()
    }
    
    
    handleClick = (event) => {
      this.setAnchorEl(event.currentTarget)
    }
  
    render(){
    const {reqNumber, id, jolter, talk, room, date, hour} = this.props
    const {status, anchorEl} = this.state
      console.log(this.props)
      return (
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
                                             onClick={this.handleClick}>{status}</TableCell> :
            status === 'APPROVED' ? <TableCell className='approved' align="left"
                                               onClick={this.handleClick}>{status}</TableCell> :
              status === 'DECLINED' ? <TableCell className='declined' align="left"
                                                 onClick={this.handleClick}>{status}</TableCell> : null}
          <StatusMenu anchorEl={anchorEl} setAnchorEl={this.setAnchorEl} setStatus={this.setRequestStatus}/>
          <TableCell align="left" onClick={() => this.removeSessionRequest(id)}><DeleteIcon/></TableCell>
        </TableRow>
      )
    }
  }
  
// }

export default SessionRequest