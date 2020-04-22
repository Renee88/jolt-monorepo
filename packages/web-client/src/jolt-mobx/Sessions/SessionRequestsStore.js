import type { SessionType, SessionsType, UserType, RoomType, TalkType } from '../../types'
import SessionRequest from './SessionRequestStore'
import { Observable } from '@jolt-us/jolt-mobx'
import axios from 'axios'

class SessionRequestsStore extends Observable {

  getSessionRequests = async (): Promise<SessionsType> => {
    const {data} = await axios.get('http://localhost:3000/session-requests')
    return data.data
  }

  addSessionRequest = async (talkID: string, roomID: string, jolterID: string, date: string, hour: string): Promise<SessionsType> => {
    const session = new SessionRequest
    session.setSession(talkID, roomID, jolterID, date, hour)
    const newSession = session.session
    await axios.post('http://localhost:3000/session-requests', newSession)
  }

  removeSessionRequest = async (id: number): Promise<void> => {
    await axios.delete(`http://localhost:3000/session-requests/${id}`)
  }

  updateRequestStatus = async (id: string, status: string): Promise<void> => {
    await axios.put(`http://localhost:3000/session-requests`, {id, status})
  }

}

export default SessionRequestsStore
