import type {SessionsType} from '../../types'

export const ResetUser = (sessions: SessionsType) => ({
  type: 'GET_ALL_SESSIONS',
  sessions
})