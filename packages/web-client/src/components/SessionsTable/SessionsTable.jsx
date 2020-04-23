import React from 'react';
import Session from '../Session/Session.jsx'
import { Query } from '@apollo/react-components';
import { gql } from 'apollo-boost';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, makeStyles } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';

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


const SessionsTable = () => {

  const classes = useStyles()
  const {jolters, talks, rooms} = useSelector(state => state)

  return (
    <Query query={SESSIONS}>

      {({ loading, error, data }) => {

        if (loading) return <div className={classes.loader}>
          <CircularProgress style={{color: "#838DFF"}} disableShrink /></div>;
        if (error) return <p>Error </p>;

        const { sessions } = data ? data : { sessions: [] }

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
                </TableRow>
              </TableHead>
              <TableBody>
                {sessions.length ? sessions.map((session, i) => {
                  const { id, jolterID, talkID, roomID, date, hour, status } = session
                  return (<Session key={i}
                    reqNumber={i + 1}
                    id={id}
                    jolterID={jolterID}
                    talkID={talkID}
                    roomID={roomID}
                    date={date}
                    hour={hour}
                    status={status} />
                  )
                }) : null}
              </TableBody>
            </Table>
          </TableContainer>
        )
      }
      }
    </Query>)
}

export default SessionsTable