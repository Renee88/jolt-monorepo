import axios from 'axios'
import getUsers from '../actions/GetUsers'
import type {UsersType} from '../../types'
import type {Dispatch, Action} from 'redux'
import type {UsersActionTypes} from '../redux-types/actionTypes'


const RemoveUserFromDB = (userID: string) => (dispatch: Dispatch<Action<UsersActionTypes>>) => {
    return axios.delete(`http://localhost:3000/users/${userID}`)
    .then(({ data }) => {
        return axios.get('http://localhost:3000/users').then(({data})=> {
            const users = data.data
            dispatch(getUsers(users))
        })
    })
}

export default RemoveUserFromDB