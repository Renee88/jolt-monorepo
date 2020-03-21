import React, { createContext, useState } from 'react'
import Page from './components/Page/Page.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

const App = () => {
  
  const [route, setRoute] = useState()
  
  return (
    <div>
    <NavBar/>
    <Router>
      <Route exact path={`/users`} render={({match}) => <Page match={match}/>}/>
      <Route exact path={`/talks`} render={({match}) => <Page match={match}/>}/>
      <Route exact path={`/rooms`} render={({match}) => <Page match={match}/>}/>
      
      <Route exact path={`/users/:id`} render={({match}) => <Page match={match}/>}/>
    </Router>
    </div>
  
  )
}

export default App
