import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const users = require('@monorepo/backend/Users.json')

const useStyles = makeStyles(theme => ({
    userFrame: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#009FB7',
      width: '75vw'
    },
    userContent: {
      backgroundColor: 'white',
      fontFamily: 'poppins',
      margin: 20,
      borderRadius: 10,
      width: '65vw',
      padding: 10
    }
  })
)

const UserDetails = ({id}) => {
  const classes = useStyles()
  
  const getUser = (id) => {
    return users.find(user => user.id == id)
  }
  
  const user = getUser(id)
  
  return (
    <div className={classes.userFrame}>
      <div className={classes.userContent}>
        {user.name}
      </div>
    </div>
  
  )
}

export default UserDetails