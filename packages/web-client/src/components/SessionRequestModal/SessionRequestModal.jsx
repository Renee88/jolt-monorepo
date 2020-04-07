import React, { useEffect, useState, Component } from 'react'
import { Button, Modal } from '@material-ui/core'
import SessionRequestInput from '../SessionRequestInput/SessionRequestInput.jsx'
import SendIcon from '@material-ui/icons/Send'
import { makeStyles } from '@material-ui/core/styles'
import { addSessionRequest } from '../../redux/actions/AddSessionRequest'
import DatePicker from '../DatePicker/DatePicker.jsx'
import type { UserType } from '../../types'
import { connect } from '@jolt-us/jolt-mobx'
import {connect as connectRedux} from 'react-redux'
import './SessionRequestModal.css'



@connect((store: any)=> ({
  newSessionRequest: store.sessionsStore.session,
  addSessionRequest: store.sessionsStore.addSessionRequest,
  removeSessionRequest: store.sessionsStore.removeSessionRequest
}))
  class SessionRequestModal extends Component<*,*>{


    constructor(){
      super()
      this.state = {
        added: false,
        input: {
          talk: {},
          room: {},
          jolter: {},
          date: '',
          hour: ''
        }
      }
    }


    setSessionAdded = (added) => {
      this.setState({added})
    }
    
    addSessionRequest = (talk, room,jolter, date, hour) => {
      this.props.addSessionRequest(talk,room,jolter, date, hour)
      this.setSessionAdded(true)
    }

    handleInput = (fieldName, data) => {
      const input = {...this.state.input}
      input[fieldName] = data
      this.setState({input})

    }

    getHourInput = (hour) => {
      const input = this.state.input
      input.hour = hour
      this.setState({input})
    }
    
    getDateInput = (day) => {
      const input = this.state.input
      input.date = day
      this.setState({input})
    }


    
    handleClose = () => {
      this.props.setOpen()
      this.setSessionAdded(false)
    }
    
    render(){
      const {open} = this.props
      const {talk, room, jolter, date, hour} = this.state.input

      return (
        <Modal
          className= 'modal'
          open={open}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <div className='paper'>
            <div id='session-request-inputs' >
              <SessionRequestInput inputType='jolter' data={this.props.users} setField={this.handleInput}/>
              <SessionRequestInput inputType='talk' data={this.props.talks} setField={this.handleInput}/>
              <SessionRequestInput inputType='room' data={this.props.rooms} setField={this.handleInput}/>
            </div>
            <DatePicker getDateInput={this.getDateInput} getHourInput={this.getHourInput} />
            <Button onClick={() => this.addSessionRequest(talk, room, jolter, date, hour)}><SendIcon/>Submit</Button>
            {this.state.added ? <p className='success-message'>Session request was added successfully</p> : null}
          </div>
        </Modal>
      )
    }
    
  }
// }

const mapStateToProps = (state) => {
    return{
      users: state.users,
      rooms: state.rooms,
      talks: state.talks
    }
}


export default connectRedux(mapStateToProps)(SessionRequestModal)