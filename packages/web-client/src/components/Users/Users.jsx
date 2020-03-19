import React, { useEffect, useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import User from '../User/User.jsx'
import { makeStyles } from '@material-ui/core/styles'

const usersData = require('@monorepo/backend/Users.json')

const useStyles = makeStyles(theme =>({
  scrollList: {
    height: '90vh'
  }
}))

const Users = ({match}) => {
  
  const classes = useStyles()
  
  const [users, setUsers] = useState([])
  
  useEffect(() => {
    setUsers(usersData)
  })
  
  
  return (
    <ScrollToBottom className={classes.scrollList}>
      {users.map((user,i) => <User key ={i} user={user} />)}
    </ScrollToBottom>
  )
}

export default Users


