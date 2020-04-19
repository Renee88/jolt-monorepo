import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import type { UserType } from '../../types'
import { Button, Card } from '@material-ui/core'
import { GetUserId as getUserId } from '../../redux/actions/GetUserId'
import { RemoveUser as removeUser } from '../../redux/actions/RemoveUser'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid } from 'react-spinners-css'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const useStyles = makeStyles(theme => ({
    userContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      fontFamily: 'poppins',
      margin: 20,
      borderRadius: 10,
      width: '75vw',
      padding: 10,
      boxShadow: 'grey 0px 1px 3px 1px'
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
  width: 'fit-content',
  backgroundColor: '#838DFF'
}


const UserDetails = ({id}: {id: string}) => {
  const classes = useStyles()

  const [user, setUser] = useState({})

  const users = useSelector(state => state.users)

  useEffect(() => {
    const chosenUser = users.find((user,i) => user.id === id)
    setUser(chosenUser)
  })
  
  const dispatch = useDispatch()
  
  return (
    user && id ?
        <Card className={classes.userContent}>
          
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
          
        </Card>
      : null
  )
}

export default UserDetails