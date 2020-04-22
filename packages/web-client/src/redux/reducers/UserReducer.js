import type { UserType } from '../../types'
const UserReducer = (state: UserType = {}, action: any) => {
    switch (action.type) {
        case 'GET_USER':
            return action.user
        default:
            return state
    }
}

export default UserReducer