import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import type { DetailsProps, UserType } from '../types'
import { Button } from '@material-ui/core'
import { GetUserId as getUserId } from '../../actions/GetUserId'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const users = require('@monorepo/backend/Users.json')

const useStyles = makeStyles(theme => ({
    userFrame: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#009FB7',
      width: '85vw'
    },
    userContent: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'white',
      fontFamily: 'poppins',
      margin: 20,
      borderRadius: 10,
      width: '75vw',
      padding: 10
    }
  })
)

const UserDetails = ({id}: DetailsProps) => {
  const classes = useStyles()
  
  const dispatch = useDispatch()
  
  const [user: UserType, setUser] = useState({})
  
  useEffect(() => {
    setUser(users.find((user: UserType) => user.id === id))
  })
  
  return (
    user ?
      <div className={classes.userFrame}>
        <div className={classes.userContent}>
          {id ? user.name : null}
          <Link to={`/rooms`}>
            <Button style={{fontFamily: 'poppins', width: 'fit-content'}} onClick={() => {
              dispatch(getUserId(id))
            }}>Select Room</Button>
          </Link>
        </div>
      </div>
      : null
  )
}

export default UserDetails