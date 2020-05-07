import type {SessionsType} from '../../types'

export const GetSessionsOfJolter: Object = (sessions: SessionsType, userID: string) => ({
  type: 'GET_SESSIONS_OF_JOLTER',
  userID,
  sessions
})