import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import type { UserType } from '../../types'
import { Button } from '@material-ui/core'
import { GetUserId as getUserId } from '../../redux/actions/GetUserId'
import { RemoveUser as removeUser } from '../../redux/actions/RemoveUser'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
      justifyContent: 'space-between',
      backgroundColor: 'white',
      fontFamily: 'poppins',
      margin: 20,
      borderRadius: 10,
      width: '75vw',
      padding: 10
    },
    userActions: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    selectRoom: {
      display: 'flex',
      alignSelf: 'center'
    }
  })
)

const buttonStyle = {
  fontFamily: 'poppins',
  width: 'fit-content',
  backgroundColor: '#4B3FC9'
}

const UserDetails = ({id}: {id: string}) => {
  const classes = useStyles()
  const users = useSelector(state => state.users)
  
  const dispatch = useDispatch()
  
  const [user: UserType, setUser] = useState({})
  
  useEffect(() => {
    setUser(users.find((user: UserType) => user.id === id))
  })
  
  return (
    user && id ?
      <div className={classes.userFrame}>
        <div className={classes.userContent}>
          
          <div className={classes.userActions}>
            <span>{id ? user.name : null}</span>
            <Button
              color="secondary"
              onClick={() => dispatch(removeUser(users, id))
              }>Delete user</Button>
          </div>
          
          <Link to={`/rooms`} className={classes.selectRoom}>
            <Button style={buttonStyle}
                    color='primary'
                    variant="contained"
                    onClick={() => {
                      dispatch(getUserId(id))
                    }}>Select Room</Button>
          </Link>
          
        </div>
      </div>
      : null
  )
}

export default UserDetails