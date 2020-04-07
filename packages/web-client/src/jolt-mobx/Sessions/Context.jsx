import React, { Component } from 'react'
import { Provider as MobxProvider } from '@jolt-us/jolt-mobx'
import SessionsStore from './SessionsStore'
import SessionStore from './SessionStore'

const sessionsStore = new SessionsStore()
const sessionStore = new SessionStore

const store = {
  sessionsStore,
  sessionStore
}

class SessionRequestsContext extends Component <*,*> {

  store: sessionsStore

  constructor(){
    super()
    this.store = store
  }

  render () {
    return (
      <MobxProvider {...this.store}>
        {this.props.children}
      </MobxProvider>
    )
  }
}

export default SessionRequestsContext