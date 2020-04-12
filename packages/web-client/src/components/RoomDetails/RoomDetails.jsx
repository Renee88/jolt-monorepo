import React, { useEffect, useState } from 'react'
import type { RoomsType, RoomType } from '../../types'
import { Grid } from 'react-spinners-css'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_ROOMS = gql`
query GetRooms {
  rooms {
        id
        name
  }
}`

const RoomDetails = ({ id }: { id: string}) => {

  const { data, loading, error } = useQuery(GET_ROOMS);

  if (loading) return <Grid className='spinner' color='#7f58af' />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Oops, my bad </p>

  const { rooms } : {rooms: RoomsType} = data
  const chosenRoom: ?RoomType = rooms.find((room: RoomType) => room.id === id)


  return (
    chosenRoom ?
      <div>
        {chosenRoom.name}
      </div>
      : null
  )
}

export default RoomDetails