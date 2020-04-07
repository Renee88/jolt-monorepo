import React, { useState } from "react";
import type { SessionsType } from "../../types";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
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

@connect((store: any) => ({
    getSessionRequests: store.sessionsStore.getSessionRequests
}))
class SessionRequests extends Component<*, *> {


  constructor() {
    super();
    this.state = {
      open: false,
      sessionRequests: []
    };
  }

  toggleModalOpen = () => {
    const state = {...this.state};
    this.setState({ open: !this.state.open });
  };


  getSessionRequests = () => {
    const sessionRequests = this.props.getSessionRequests()
    this.setState({sessionRequests})
  }


  render() {
    const sessionRequests = this.props.getSessionRequests()

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
        <SessionRequestTable sessions={sessionRequests} getSessionRequests={this.getSessionRequests}/>
        <SessionRequestModal open={this.state.open} setOpen={this.toggleModalOpen} />
      </div>
    );
  }
}

export default SessionRequests;


