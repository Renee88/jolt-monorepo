import type { SessionType, SessionsType, UserType, RoomType, TalkType } from '../../types'
import Session from './SessionStore'
import { Observable } from '@jolt-us/jolt-mobx'

class SessionsStore extends Observable {
  sessionRequests: SessionsType = []

  getSessionRequests = (): SessionsType => {
    return this.sessionRequests
  }

  addSessionRequest = (talk: TalkType, room: RoomType, jolter: UserType, date: string, hour: string): void => {
    const sessionRequests = [...this.sessionRequests]
    const session = new Session
    session.setSession(talk, room, jolter, date, hour)
    sessionRequests.push(session)
    this.sessionRequests = sessionRequests
  }

  removeSessionRequest = (id: number): void => {
    const sessionRequests = [...this.sessionRequests]
    const sessionIndex = sessionRequests.findIndex(session => session.id === id)
    sessionRequests.splice(sessionIndex, 1)
    this.sessionRequests = sessionRequests
  }

}

export default SessionsStore
