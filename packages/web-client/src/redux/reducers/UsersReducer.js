import type { UsersType } from '../../types'

const users = require('@monorepo/backend/Data/Users.json')

const UsersReducer = (state: UsersType = users, action: any) => {
  const users = [...state]
  
  switch (action.type) {
    case 'ADD_USER':
      users.push(action.user)
      return users
    case 'REMOVE_USER':
      const userIndex = action.users.findIndex(user => user.id === action.userId)
      
      if (userIndex !== -1) {
        users.splice(userIndex, 1)
      }
      
      return users
    default:
      return state
  }
}

export default UsersReducer