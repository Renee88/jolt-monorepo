import React from 'react'
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import type { UserProps } from '../../types'
import { deepOrange } from '@material-ui/core/colors';

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
  },
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  }
}))

const User = ({ user }: UserProps) => {
  const classes = useStyles()

  const firstNameCapital = user.name.split(" ")[0][0]
  const lastNameCapital = user.name.split(" ")[1][0]

  return (
    <Link to={`/users/${user.id}`}>
      <Card className={classes.userCard}>
        <CardActionArea>
          <CardContent className={classes.user}>

            <Avatar className={user.picture ? classes.userPic : classes.avatar}
              src={user.picture ? user.picture : null}>
              {user.picture ? null : firstNameCapital + lastNameCapital}
            </Avatar>

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