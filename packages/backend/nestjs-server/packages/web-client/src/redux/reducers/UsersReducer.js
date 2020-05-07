import type { UsersType } from '../../types'

const UsersReducer = (state: UsersType = [], action: any) => {
  
  switch (action.type) {
    case 'GET_USERS':
      return action.users
    default:
      return state
  }
}

export default UsersReducer