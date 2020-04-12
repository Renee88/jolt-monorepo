import { Observable } from "@jolt-us/jolt-mobx/lib/Observable";
import { v4 as uuidv4 } from 'uuid'
import { SessionType, TalkType, UserType, RoomType } from '../../types'

class SessionStore extends Observable {

  session: SessionType = {}

  setTalk = (talk: TalkType) => {
    this.session.talk = talk
  }

  setRoom = (room: RoomType) => {
    this.session.room = room
  }

  setJolter = (jolter: UserType) => {
    this.session.jolter = jolter
  }

  setDate = (date: string, hour: string) => {
    this.session.date = date
    this.session.hour = hour
  }

  setSession = (talk: TalkType, room: RoomType, jolter: UserType, date:string, hour: string) => {
    const id = uuidv4()
    this.session.id = id
    console.log(id)
    this.setTalk(talk)
    this.setRoom(room)
    this.setJolter(jolter)
    this.setDate(date, hour)
  }


}

export default SessionStore