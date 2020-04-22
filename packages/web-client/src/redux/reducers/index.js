import UsersReducer from './UsersReducer'
import RoomsReducer from './RoomsReducer'
import TalksReducer from './TalksReducer'
import {combineReducers} from 'redux'
import  UserReducer from './UserReducer'
import SessionsReducer  from './SessionsReducer'

const allReducers: any = combineReducers({
  users: UsersReducer,
  rooms: RoomsReducer,
  talks: TalksReducer,
  sessions: SessionsReducer,
  user: UserReducer
})

export default allReducers