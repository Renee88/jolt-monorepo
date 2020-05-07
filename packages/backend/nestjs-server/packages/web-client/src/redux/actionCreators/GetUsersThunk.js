import axios from 'axios'
import getUsers from '../actions/GetUsers'
import type {Dispatch, Action} from 'redux'
import type {UsersActionTypes} from '../redux-types/actionTypes'


const GetUsersFromDB = () => (dispatch: Dispatch<Action<UsersActionTypes>>) => {
    return axios.get(`http://localhost:3000/users`).then(({data})=> {
        const users = data.data
        dispatch(getUsers(users))
    })
}

export default GetUsersFromDB