import React from 'react'
import { Button, Card, CardContent, Typography, CardActions } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import type { RoomType, UserType } from '../../types'
import { Link } from 'react-router-dom'
import { AddUserToRoom as addUserToRoom } from '../../redux/actions/AddUserToRoom'
import { ResetUserId as resetUserId } from '../../redux/actions/ResetUserId'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  roomCard: {
    display: 'flex',
    flexDirection: 'row',
    width: '15vw',
    margin: 10
  },
  roomCardContent: {
    display: 'flex',
    width: '15vw'
  },
  roomCardText: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'poppins',
    justifyItems: 'space-around'
  },
  row: {
    margin: 3
  }
}))

const Room = ({room}: { room: RoomType }) => {
  const classes = useStyles()
  
  const {users, userId} = useSelector(state => state)
  const dispatch = useDispatch()
  
  const user = users.find(user => user.id === userId)
  const roomId = room.id
  
  return (
    <Link to={`/rooms/${roomId}`}>
      <Card className={classes.roomCard}>
        <CardContent className={classes.roomCardContent}>
          <FiberManualRecordIcon style={{color: room.name, marginRight: 10}}/>
          <div className={classes.roomCardText}>
            <p className={classes.row}>{room.name}</p>
            <p className={classes.row}>In the room: {room.participants.length}</p>
          </div>
        </CardContent>
        <CardActions>
          <Button size='small' variant='contained' color='primary'
                  onClick={() => {
                    if(userId) {
                      dispatch(addUserToRoom(user, roomId))
                      dispatch(resetUserId())
                    }
                  }}> Join </Button>
        </CardActions>
      </Card>
    </Link>
  )
}

export default Room