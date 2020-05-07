import React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import type { UserProps } from '../types'

const useStyles = makeStyles(theme => ({
  userCard: {
    width: '15vw',
    margin: 10,
    backgroundColor: '#F4F4F8'
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    width: '12vw'
  },
  userPic: {
    display: 'flex',
    height: 50,
    width: 50,
    borderRadius: '50%'
  },
  userName: {
    display: 'flex',
    alignSelf: 'center',
    marginLeft: 20
  }
}))

const User = ({user}: UserProps) => {
  const classes = useStyles()
  
  return (
    <Link to={`/users/${user.id}`}>
      <Card className={classes.userCard}>
        <CardActionArea>
          <CardContent className={classes.user}>
            <CardMedia
              className={classes.userPic}
              image={user.picture}
              title={user.name}
            />
            
            <Typography className={classes.userName}>
              {user.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default User