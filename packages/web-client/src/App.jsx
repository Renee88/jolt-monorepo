import React, { createContext, useState } from 'react'
import Page from './components/Page/Page.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import './App.css'

const App = () => {
  
  const [route, setRoute] = useState()
  
  return (
    <Router>
      <NavBar/>
      <Route exact path={`/users`} render={() => <Page route='users'/>}/>
      <Route exact path={`/talks`} render={() => <Page route='talks'/>}/>
      <Route exact path={`/rooms`} render={() => <Page route='rooms'/>}/>
      
      <Route exact path={`/users/:id`} render={({match}) => <Page route='users' match={match}/>}/>
    </Router>
  
  )
}

export default App
