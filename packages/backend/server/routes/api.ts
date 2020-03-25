import express, {Request, Response, Router} from 'express'
import {getResponse} from "./getResponse";
import {Data, User, Users} from "../../types";

const router: Router = express.Router()
const users: Users = require('../../Users.json')


router.get('/users', function (req: Request, res: Response) {
    const usersData: Data[] = users.slice(0, 99)
    const response = getResponse(usersData)
    res.send(response)

})


router.get('/user/:id', function (req: Request, res: Response) {
    const userId: string = req.params.id
    const user: Data = users.find(user => user.id === userId)

    const response = getResponse(user)
    res.send(response)
})


router.post('/user', function (req: Request, res: Response) {
    const newUser: User = req.body

    if (typeof newUser !== 'undefined') {
        users.push(newUser)
    }

    const response = getResponse(newUser)
    res.send(response)

})

module.exports = router