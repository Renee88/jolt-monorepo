import React, { Component } from 'react'
import { Provider as MobxProvider } from '@jolt-us/jolt-mobx'
import SessionRequestsStore from './SessionRequestsStore'
import SessionRequestStore from './SessionRequestStore'

const sessionRequestsStore = new SessionRequestsStore
const sessionRequestStore = new SessionRequestStore

const store = {
  sessionRequestsStore,
  sessionRequestStore
}

class SessionRequestsContext extends Component <*,*> {

  store: { sessionRequestsStore: SessionRequestsStore, sessionRequestStore: SessionRequestStore}
  
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