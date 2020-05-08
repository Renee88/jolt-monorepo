import React from 'react';
import SessionsTable from '../SessionsTable/SessionsTable.jsx'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';
import './Sessions.css'

const SESSIONS = gql`
query {
  sessions {
    id
    talkID
    jolterID
    roomID
    date
    hour
    status
  }
}
`
const useStyles = makeStyles(theme => ({
    loader: {
        width: '100vw',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))

const Sessions = () => {

    const classes = useStyles()

    const { loading, error, data, refetch } = useQuery(SESSIONS)

    if (loading) return <div className={classes.loader}>
        <CircularProgress style={{ color: "#838DFF" }} disableShrink /></div>;
    if (error) return <p>Error </p>;

    const { sessions } = data ? data : { sessions: [] }

    return (
        <div id="sessions-page">
            <p id="sessions-title">Sessions</p>
            <SessionsTable sessions={sessions} refetch={refetch} />
        </div>
    )
}

export default Sessions