import type { SessionType } from '../../types'

export const addSessionRequest = (session: SessionType) => ({
  type: 'ADD_SESSION_REQUEST',
  session: session
})