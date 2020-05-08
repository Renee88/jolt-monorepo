import React, { useState } from "react";
import type { SessionsType } from "../../types";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import SessionRequestModal from "../SessionRequestModal/SessionRequestModal.jsx";
import SessionRequestTable from "../SessionRequestsTable/SessionRequestsTable.jsx";
import { Component } from "react";
import './SessionRequests.css'
import { connect } from "@jolt-us/jolt-mobx/lib/connect";

const styles = {
  title: {
    textAlign: "center",
    fontFamily: "poppins",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: "#4b3fc9",
    color: "white",
  },
};

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

@connect((store: any) => ({
  getSessionRequests: store.sessionRequestsStore.getSessionRequests
}))
class SessionRequests extends Component<*, *> {


  constructor() {
    super();
    this.state = {
      open: false,
      sessionRequests: [],
      showSuccessSnackbar: false
    };
  }

  
  toggleModalOpen = () => {
    const state = { ...this.state };
    this.setState({ open: !this.state.open });
  };
  
  toggleSuccessSnackbarOpen = () => {
    const showSuccessSnackbar = !this.state.showSuccessSnackbar
    this.setState({ showSuccessSnackbar })
  }

  handleSnackbarClose = () => {
    this.toggleSuccessSnackbarOpen()
  }


  getSessionRequests = async () => {
    const { getSessionRequests } = this.props
    const sessionRequests =  await getSessionRequests()
    this.setState({sessionRequests})
  }

  componentDidMount = () => {
      this.getSessionRequests()
  }

  render() {
    const { sessionRequests, showSuccessSnackbar } = this.state

    return (
      <div>
        <Button
          style={styles.buttonStyle}
          variant="contained"
          onClick={this.toggleModalOpen}
        >
          <AddIcon style={{ marginRight: 10 }} /> New Session Request
        </Button>
        <p id="session-requests-title">Session requests</p>
        <SessionRequestTable sessionRequests={sessionRequests} getSessionRequests={this.getSessionRequests} />
        <SessionRequestModal open={this.state.open} setOpen={this.toggleModalOpen} toggleSuccessSnackbarOpen = {this.toggleSuccessSnackbarOpen} getSessionRequests={this.getSessionRequests} />
        <Snackbar open={showSuccessSnackbar} autoHideDuration={3000} onClose={this.handleSnackbarClose}>
              <Alert onClose={() => this.handleSnackbarClose('success')} severity="success">
                Session was added successfully
              </Alert>
            </Snackbar>
      </div>
    );
  }
}

export default SessionRequests;


