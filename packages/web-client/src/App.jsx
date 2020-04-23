import React, { useEffect } from 'react'
import {useDispatch} from 'react-redux';
import getTalks from './redux/actionCreators/GetTalksThunk'
import getUsers from './redux/actionCreators/GetUsersThunk'
import getRooms from './redux/actionCreators/GetRoomsThunk'
import Page from './components/Page/Page.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Login from './components/Login/Login.jsx'
import Landing from './components/Landing/Landing.jsx'
import SessionRequests from './components/SessionRequests/SessionRequests.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid } from 'react-spinners-css'
import { useSelector } from 'react-redux'
import Context from './jolt-mobx/Sessions/Context.jsx'
import Sessions from './components/SessionsTable/SessionsTable.jsx'
import './App.css'





const App = () => {

      const dispatch = useDispatch()

      useEffect(()=>{
          dispatch(getUsers())
          dispatch(getTalks())
          dispatch(getRooms())
      }, [])

      return (
            <Context>
                  <Router>
                        <NavBar />
                        <Route exact path='/' component={Login} />
                        <Route exact path={'/landing'} component={Landing} />
                        <Route exact path={`/users`} render={({ match }) => <Page match={match} />} />
                        <Route exact path={`/talks`} render={({ match }) => <Page match={match} />} />
                        <Route exact path={`/rooms`} render={({ match }) => <Page match={match}  />} />
                        <Route exact path={`/session-requests`} component={SessionRequests}/>
                        <Route exact path={`/sessions`} component={Sessions} />

                        <Route exact path={`/users/:id`} render={({ match }) => <Page match={match} />} />
                        <Route exact path={`/talks/:id`} render={({ match }) => <Page match={match} />} />
                        <Route exact path={`/rooms/:id`} render={({ match }) => <Page match={match}  />} />
                  </Router>
            </Context>

      )
}

export default App
