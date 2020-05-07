import type {RoomsType} from '../../types'

export const getRooms = (rooms: RoomsType) => ({
    type: 'GET_ROOMS',
    rooms
})