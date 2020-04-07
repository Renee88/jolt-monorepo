import React, { useEffect, useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import User from '../User/User.jsx'
import { makeStyles } from '@material-ui/core/styles'
import type { UsersType } from '../../types'

const useStyles = makeStyles(theme =>({
  scrollList: {
    height: '90vh'
  }
}))

const Users = ({users}: {users: UsersType}) => {
  
  const classes = useStyles()
  
  return (
    <ScrollToBottom className={classes.scrollList}>
      {users.map((user, i) => <User key={i} user={user} />)}
    </ScrollToBottom>
  )
}

export default Users


