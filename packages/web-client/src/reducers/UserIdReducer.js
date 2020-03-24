export const UserIdReducer = (state: string = '', action: Object) => {
  switch (action.type) {
    case 'GET_USER_ID':
      return action.userId
    case 'RESET_USER_ID':
      return ''
    default:
      return state
  }
}