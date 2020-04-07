import UsersReducer from './UsersReducer'
import RoomsReducer from './RoomsReducer'
import TalksReducer from './TalksReducer'
import {combineReducers} from 'redux'
import  UserIdReducer from './UserIdReducer'
import SessionsReducer  from './SessionsReducer'

const allReducers: any = combineReducers({
  users: UsersReducer,
  rooms: RoomsReducer,
  talks: TalksReducer,
  sessions: SessionsReducer,
  userId: UserIdReducer
})

export default allReducers