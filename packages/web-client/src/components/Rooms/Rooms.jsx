import React from 'react'
import Room from '../Room/Room.jsx'
import type { RoomType, UserType } from '../types'
import ScrollToBottom from 'react-scroll-to-bottom'
import { makeStyles } from '@material-ui/core/styles'

const rooms = require('@monorepo/backend/Rooms.json')

const useStyles = makeStyles(theme => ({
  scrollList: {
    height: '90vh'
  }
}))

const Rooms = ({userId}: {userId: string}) => {
  const classes = useStyles()
  
  return (
    <ScrollToBottom className={classes.scrollList}>
      {rooms.map((room: RoomType, i) => <Room key={i} room={room} userId={userId}/>)}
    </ScrollToBottom>
  )
}

export default Rooms