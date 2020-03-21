const express = require('express')
const router = express.Router()
const users = require('../../Users.json')

router.get('/users', function(req, res){
  res.send(users)
})

module.exports = router