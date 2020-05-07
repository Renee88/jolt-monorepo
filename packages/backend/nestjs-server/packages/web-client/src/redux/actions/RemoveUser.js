export const RemoveUser = (users: Object[],userId: string) => ({
  type: 'REMOVE_USER',
  users,
  userId
})