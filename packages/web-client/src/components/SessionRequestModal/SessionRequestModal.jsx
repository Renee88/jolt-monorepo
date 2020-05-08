import React, { useEffect, useState, Component } from 'react'
import { Button, Modal } from '@material-ui/core'
import SessionRequestInput from '../SessionRequestInput/SessionRequestInput.jsx'
import SendIcon from '@material-ui/icons/Send'
import { makeStyles } from '@material-ui/core/styles'
import DatePicker from '../DatePicker/DatePicker.jsx'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import type { UserType, UsersType, TalksType, RoomsType, Props, OwnProps } from '../../types'
import { connect } from '@jolt-us/jolt-mobx'
import { connect as connectRedux } from 'react-redux'
import './SessionRequestModal.css'

const styles = {
  buttonStyle: {
    margin: 10,
    backgroundColor: "#4b3fc9",
    color: "white",
  }
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
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
      },
      showErrorSnackbar: false
    }
  }


  setSessionAdded = (added: boolean) => {
    this.setState({ added })
  }

  addSessionRequest = async (talkID: string, roomID: string, jolterID: string, date: string, hour: string) => {
    if (talkID && roomID && jolterID && date && hour) {
      await this.props.addSessionRequest(talkID, roomID, jolterID, date, hour)
      this.props.toggleSuccessSnackbarOpen()
      this.setSessionAdded(true)
      this.handleClose()
    } else {
      this.toggleErrorSnackbarOpen()
    }
  }

  toggleErrorSnackbarOpen = () => {
    const showErrorSnackbar = !this.state.showErrorSnackbar
    console.log(showErrorSnackbar)
    this.setState({ showErrorSnackbar })
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



  handleClose = () => {
    this.props.setOpen()
    this.props.getSessionRequests()
    this.setSessionAdded(false)
  }

  handleSnackbarClose = () => {
    this.toggleErrorSnackbarOpen()
  }


  render() {
    const { open, talks, jolters } = this.props
    const { added, showErrorSnackbar } = this.state
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
            <SessionRequestInput className="modal-input" inputType='jolter' data={jolters} setField={this.handleInput} />
            <SessionRequestInput className="modal-input" inputType='talk' data={talks} setField={this.handleInput} />
            <SessionRequestInput className="modal-input" inputType='room' data={this.props.rooms} setField={this.handleInput} />
          </div>
          <DatePicker getDateInput={this.getDateInput} getHourInput={this.getHourInput} />
          <Button style={styles.buttonStyle} variant='contained' onClick={() => this.addSessionRequest(talkID, roomID, jolterID, date, hour)} startIcon={<SendIcon />}>Submit</Button>

          {!added ?
            <Snackbar open={showErrorSnackbar} autoHideDuration={3000} onClose={this.handleSnackbarClose}>
              <Alert onClose={() => this.handleSnackbarClose()} severity="error">
                Please fill in all fields
              </Alert>
            </Snackbar>
            : null}
        </div>
      </Modal>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    jolters: state.jolters,
    rooms: state.rooms,
    talks: state.talks
  }
}

//$FlowFixMe
export default connectRedux(mapStateToProps)(SessionRequestModal)

