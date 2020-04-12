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

const GET_ROOMS = gql`
query GetRooms {
  rooms {
        id
        name
  }
}`

const Rooms = ({ userId }: { userId: string }) => {
  const classes = useStyles()

  const { data, loading, error } = useQuery(GET_ROOMS);

  if (loading) return <Grid className='spinner' color='#7f58af' />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Oops, my bad </p>

  const { rooms } = data

  return (
    <ScrollToBottom className={classes.scrollList}>
      {rooms.map((room: RoomType, i) => <Room key={i} room={room} userId={userId} />)}
    </ScrollToBottom>
  )
}

export default Rooms