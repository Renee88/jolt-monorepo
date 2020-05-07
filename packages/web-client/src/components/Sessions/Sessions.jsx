import React from 'react';
import SessionsTable from '../SessionsTable/SessionsTable.jsx'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useEffect } from 'react';
import './Sessions.css'

const useStyles = makeStyles(theme => ({
    loader: {
        width: '100vw',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))


const SESSIONS = gql`
  query getSessions {
    sessions {
    id
    talkID
    jolterID
    roomID
    date
    hour
    status
  }
  }`



const Sessions = () => {

    const classes = useStyles()

    useEffect(() => {
        refetch()
    }, [])

    const { loading, error, data, refetch } = useQuery(SESSIONS)


    if (loading) {
        return (
            <div className={classes.loader}>
                <CircularProgress style={{ color: "#838DFF" }} disableShrink />
            </div>
        )
    };
    
    if (error) return <p>Error </p>;

    const { sessions } = data ? data : { sessions: [] }

    return (
        <div id="sessions-table">
            <p className="title" >Sessions</p>
            <SessionsTable sessions={sessions} />
        </div>

    )
}

export default Sessions