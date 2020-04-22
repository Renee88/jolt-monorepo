import axios from 'axios'
import {getTalks} from '../actions/GetTalks'
import type {Dispatch, Action} from 'redux'
import type {TalksActionTypes} from '../redux-types/actionTypes'


const GetTalksCreator = ()=>  (dispatch: Dispatch<Action<TalksActionTypes>>) =>{
    return axios.get('http://localhost:3000/talks')
    .then(({data})=> {
        const talks = data.data
        dispatch(getTalks(talks))
    })
}

export default GetTalksCreator