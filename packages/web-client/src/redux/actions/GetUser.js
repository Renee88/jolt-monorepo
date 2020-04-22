import type {UserType} from '../../types'

const GetUser = (user: UserType)=> ({
    type: 'GET_USER',
    user
})

export default GetUser;