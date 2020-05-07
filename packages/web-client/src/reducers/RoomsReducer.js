const rooms = require('@monorepo/backend/Data/Rooms.json')

const RoomsReducer = (state: [] = rooms, action: any) => {
  
  const rooms = [...state]
  
  switch (action.type){
    case 'GET_ROOMS':
      return rooms
    case 'ADD_USER_TO_ROOM':
      rooms.forEach(room => room.id === action.roomId ? room.participants.push(action.user) : null )
      return rooms
    default:
      return state
  }
}

export default RoomsReducer