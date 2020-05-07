import type {RoomsType} from '../../types'

const RoomsReducer = (state: RoomsType= [], action: any) => {
  
  const rooms = [...state]
  
  switch (action.type){
    case 'GET_ROOMS':
      return action.rooms
    default:
      return state
  }
}

export default RoomsReducer