import type {UsersType} from '../../types'

const GetUsers = (users: UsersType) => ({
    type: 'GET_USERS',
    users
})

export default GetUsers