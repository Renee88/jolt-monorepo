import type { UserType } from '../components/types'

export const AddUserToRoom = (user: UserType, roomId: string) => ({
  type: 'ADD_USER_TO_ROOM',
  user,
  roomId
})
