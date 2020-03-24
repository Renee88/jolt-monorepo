import React, { createContext, useState } from 'react'
import Page from './components/Page/Page.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'

const App = () => {
 const state = useSelector(state => state)
  
  return (
    <Router>
      <NavBar/>
      <Route exact path={`/users`} render={({match}) => <Page match={match} data={state.users}/>}/>
      <Route exact path={`/talks`} render={({match}) => <Page match={match} data={state.talks}/>}/>
      <Route exact path={`/rooms`} render={({match}) => <Page match={match} data={state.rooms}/>}/>
      
      <Route exact path={`/users/:id`} render={({match}) => <Page match={match} data={state.users}/>}/>
      <Route exact path={`/talks/:id`} render={({match}) => <Page match={match} data={state.talks}/>}/>
      <Route exact path={`/rooms/:id`} render={({match}) => <Page match={match} data={state.rooms}/>}/>
    </Router>
  
  )
}

export default App
