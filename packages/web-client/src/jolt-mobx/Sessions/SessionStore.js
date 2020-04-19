import { Observable } from "@jolt-us/jolt-mobx/lib/Observable";
import { v4 as uuidv4 } from 'uuid'
import type { SessionType, TalkType, UserType, RoomType } from '../../types'

class SessionStore extends Observable {

  session: SessionType = {}

  setTalk = (talkID: string) => {
    this.session.talkID = talkID
  }

  setRoom = (roomID: string) => {
    this.session.roomID = roomID
  }

  setJolter = (jolterID: string) => {
    this.session.jolterID = jolterID
  }

  setDate = (date: string, hour: string) => {
    this.session.date = date
    this.session.hour = hour
  }

  setSession = (talkID: string, roomID: string, jolterID: string, date:string, hour: string) => {
    const id = uuidv4()
    this.session.id = id
    this.setTalk(talkID)
    this.setRoom(roomID)
    this.setJolter(jolterID)
    this.setDate(date, hour)
  }


}

export default SessionStore