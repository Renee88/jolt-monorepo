import React from 'react'
import Room from '../Room/Room.jsx'
import type { RoomsType, RoomType, UserType } from '../../types'
import ScrollToBottom from 'react-scroll-to-bottom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from 'react-spinners-css'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const useStyles = makeStyles(theme => ({
  scrollList: {
    height: '90vh'
  }
}))

const Rooms = ({ userId, rooms }: { userId: string, rooms: RoomsType }) => {
  const classes = useStyles()

  return (
    <ScrollToBottom className={classes.scrollList}>
      {rooms.map((room: RoomType, i) => <Room key={i} room={room} userId={userId} />)}
    </ScrollToBottom>
  )
}

export default Rooms