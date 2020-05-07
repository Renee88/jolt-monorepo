import type { SessionType } from '../components/types'

export const addSessionRequest = (session: SessionType) => ({
  type: 'ADD_SESSION_REQUEST',
  session: session
})