import React, { createContext, useState } from 'react'
import Page from './components/Page/Page.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'
import SessionRequests from './components/SessionRequests/SessionRequests.jsx'

const App = () => {
 const {users, talks, rooms} = useSelector(state => state)
  
  return (
    <Router>
      <NavBar/>
      <Route exact path={`/users`} render={({match}) => <Page match={match} data={users}/>}/>
      <Route exact path={`/talks`} render={({match}) => <Page match={match} data={talks}/>}/>
      <Route exact path={`/rooms`} render={({match}) => <Page match={match} data={rooms}/>}/>
      <Route exact path={`/session-requests`} component={SessionRequests}/>
      
      <Route exact path={`/users/:id`} render={({match}) => <Page match={match} data={users}/>}/>
      <Route exact path={`/talks/:id`} render={({match}) => <Page match={match} data={talks}/>}/>
      <Route exact path={`/rooms/:id`} render={({match}) => <Page match={match} data={rooms}/>}/>
    </Router>
  
  )
}

export default App
