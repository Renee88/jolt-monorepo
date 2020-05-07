import axios from 'axios'
import {getRooms} from '../actions/GetRooms'
import type {Dispatch, Action} from 'redux'
import type {RoomsActionTypes} from '../redux-types/actionTypes' 

const GetRoomsCreator = () => (dispatch: Dispatch<Action<RoomsActionTypes>>) => {
    return axios.get('http://localhost:3000/rooms')
    .then(({data})=> {
        const rooms = data.data
        dispatch(getRooms(rooms))
    })
}

export default GetRoomsCreator