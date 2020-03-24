import UsersReducer from './UsersReducer'
import RoomsReducer from './RoomsReducer'
import {combineReducers} from 'redux'
import { UserIdReducer } from './UserIdReducer'

const allReducers: any = combineReducers({
  users: UsersReducer,
  rooms: RoomsReducer,
  userId: UserIdReducer
})

export default allReducers