import axios from 'axios'
import getUser from './GetUser'

const GetUserFromDB = (userID: string) => (dispatch: any) => {
    return axios.get(`http://localhost:3000/users/${userID}`).then(({data})=> {
        const user = data.data
        dispatch(getUser(user))
    })
}

export default GetUserFromDB
