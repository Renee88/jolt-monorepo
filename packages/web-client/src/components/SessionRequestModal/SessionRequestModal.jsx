import React, { useEffect, useState, Component } from 'react'
import { Button, Modal } from '@material-ui/core'
import SessionRequestInput from '../SessionRequestInput/SessionRequestInput.jsx'
import SendIcon from '@material-ui/icons/Send'
import { makeStyles } from '@material-ui/core/styles'
import DatePicker from '../DatePicker/DatePicker.jsx'
import type { UserType, UsersType, TalksType, RoomsType, Props, OwnProps } from '../../types'
import { connect } from '@jolt-us/jolt-mobx'
import { connect as connectRedux } from 'react-redux'
import './SessionRequestModal.css'
import getUsers from '../../redux/actionCreators/GetUsersThunk'
import getTalks from '../../redux/actionCreators/GetTalksThunk'
import getRooms from '../../redux/actionCreators/GetRoomsThunk'

const styles = {
  buttonStyle: {
    margin: 10,
    backgroundColor: "#4b3fc9",
    color: "white",
  }
}


@connect((store: any) => ({
  newSessionRequest: store.sessionRequestsStore.session,
  addSessionRequest: store.sessionRequestsStore.addSessionRequest,
  removeSessionRequest: store.sessionRequestsStore.removeSessionRequest,
  sessionRequests: store.sessionRequestsStore.sessionRequests,
}))
class SessionRequestModal extends Component<*, *>{


  constructor() {
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


  setSessionAdded = (added: boolean) => {
    this.setState({ added })
  }

  addSessionRequest = async (talkID: string, roomID: string, jolterID: string, date: string, hour: string) => {
    if (talkID && roomID && jolterID && date && hour) {
      await this.props.addSessionRequest(talkID, roomID, jolterID, date, hour)
      this.setSessionAdded(true)
      this.handleClose()
    }
  }

  handleInput = (fieldName: string, data: {}) => {
    const input = { ...this.state.input }
    input[fieldName] = data
    this.setState({ input })

  }

  getHourInput = (hour: string) => {
    const input = this.state.input
    input.hour = hour
    this.setState({ input })
  }

  getDateInput = (day: string) => {
    const input = this.state.input
    input.date = day
    this.setState({ input })
  }



  handleClose =  () => {
    this.props.setOpen()
    this.props.getSessionRequests()
    this.setSessionAdded(false)
  }

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(getUsers())
    dispatch(getTalks())
    dispatch(getRooms())
  }

  render() {
    const { open } = this.props
    const { talk, room, jolter, date, hour } = this.state.input
    const talkID = talk.id
    const roomID = room.id
    const jolterID = jolter.id

    return (
      <Modal
        className='modal'
        open={open}
        onClose={this.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className='paper'>
          <div id='session-request-inputs' >
            <SessionRequestInput className="modal-input" inputType='jolter' data={this.props.jolters} setField={this.handleInput} />
            <SessionRequestInput inputType='talk' data={this.props.talks} setField={this.handleInput} />
            <SessionRequestInput className="modal-input" inputType='room' data={this.props.rooms} setField={this.handleInput} />
          </div>
          <DatePicker getDateInput={this.getDateInput} getHourInput={this.getHourInput} />
          <Button style={styles.buttonStyle} variant='contained' onClick={() => this.addSessionRequest(talkID, roomID, jolterID, date, hour)} startIcon={<SendIcon />}>Submit</Button>
        </div>
      </Modal>
    )
  }

}


const mapStateToProps = (state)=> {
  return {
    jolters: state.users,
    rooms: state.rooms,
    talks: state.talks
  }
}


export default connectRedux(mapStateToProps)(SessionRequestModal)

// 