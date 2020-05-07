import type { SessionsType } from '../components/types'

const SessionsReducer = (state: SessionsType = [], action: any) => {
  
  const sessions = [...state]
  
  switch(action.type){
    case 'ADD_SESSION_REQUEST':
      sessions.push(action.session)
      return sessions
    case 'REMOVE_SESSION_REQUEST':
      const sessionIndex = sessions.findIndex(session => session.id === action.sessionId)
      
      if(sessionIndex !== -1){
        sessions.splice(sessionIndex, 1)
      }
      
      return sessions
    default:
      return state
  
  }
}

export default SessionsReducer