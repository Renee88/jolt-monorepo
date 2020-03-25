import type { UsersType } from '../components/types'

const users = require('@monorepo/backend/Users.json')

const UsersReducer = (state: ?UsersType = users, action: any) => {
  
  const users = [...state]
  
  switch (action.type) {
    case 'ADD_USER':
      users.push(action.user)
      return users
    case 'REMOVE_USER':
      const userIndex = action.users.findIndex(user => user.id === action.userId)
      users.splice(userIndex, 1)
      return users
    default:
      return state
  }
}

export default UsersReducer