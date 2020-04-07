import type { UserType } from '../../types'

export const AddUserToRoom = (user: UserType, roomId: string) => ({
  type: 'ADD_USER_TO_ROOM',
  user,
  roomId
})
