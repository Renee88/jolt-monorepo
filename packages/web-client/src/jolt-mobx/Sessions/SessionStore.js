import { Observable } from "@jolt-us/jolt-mobx/lib/Observable";
import { v4 as uuidv4 } from 'uuid'
import { SessionType } from '../../types'

class SessionStore extends Observable {

  session: SessionType = {}

  setTalk = (talk) => {
    this.session.talk = talk
  }

  setRoom = (room) => {
    this.session.room = room
  }

  setJolter = (jolter) => {
    this.session.jolter = jolter
  }

  setDate = (date, hour) => {
    this.session.date = date
    this.session.hour = hour
  }

  setSession = (talk, room, jolter, date, hour) => {
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