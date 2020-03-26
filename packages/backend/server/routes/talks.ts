import express, {Request, Response, Router} from 'express'

const router: Router = express.Router()
const talks = require('../../Talks.json')

router.get('/talks', function (req: Request, res: Response) {
    console.log(talks)
    res.send(talks)
})

module.exports = router
