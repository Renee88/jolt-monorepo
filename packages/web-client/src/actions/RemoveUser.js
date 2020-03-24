export const RemoveUser = (users: Object[],userID: string) => ({
  type: 'REMOVE_USER',
  users,
  userID
})