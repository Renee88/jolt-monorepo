import express, {Request, Response, Router} from 'express'
import {getResponse} from "./getResponse";
import {Data, User, Users} from "../../types";

const router: Router = express.Router()
const users: Users = require('../../Users.json')


router.get('/users', function (req: Request, res: Response) {
    const usersData: Data[] = users.slice(0, 99)
    const firstHundredUsers = getResponse(usersData)
    res.send(firstHundredUsers)
})


router.get('/user/:id', function (req: Request, res: Response) {
    const userId: string = req.params.id
    const user: Data = users.find(user => user.id === userId)

    const requestedUser = getResponse(user)
    res.send(requestedUser)
})


router.post('/user', function (req: Request, res: Response) {
    const newUser: User = req.body

    if (typeof newUser !== 'undefined') {
        users.push(newUser)
    }

    const user = getResponse(newUser)
    res.send(user)

})

router.delete('/user/:id', function (req: Request, res: Response) {
    const userForRemovalId: string = req.params.id
    const userForRemovalIndex: number = users.findIndex(user => user.id === userForRemovalId)
    const userForRemoval = users[userForRemovalIndex]
    users.splice(userForRemovalIndex, 1)
    const removedUser  = getResponse(userForRemoval)
    res.send(removedUser)
})

module.exports = router