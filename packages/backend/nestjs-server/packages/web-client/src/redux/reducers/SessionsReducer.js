import type {SessionsType} from '../../types'

const SessionsReducer = (state: SessionsType = [], action: Object) => {
  const userID = action.userID
  
  switch (action.type) {
    case 'GET_SESSIONS_OF_JOLTER':
      const sessions = action.sessions.filter(session => session.jolterID === userID)
      return sessions
    case 'GET_ALL_SESSIONS':
      return action.sessions
    default:
      return state
  }
}

export default SessionsReducer