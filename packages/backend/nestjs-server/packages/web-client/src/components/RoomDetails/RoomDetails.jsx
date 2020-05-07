import React, { useEffect, useState } from 'react'
import type { RoomsType, RoomType } from '../../types'
import { Grid } from 'react-spinners-css'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useSelector } from 'react-redux'


const RoomDetails = ({ id }: { id: string}) => {

  const [room, setRoom] = useState({})

  const rooms = useSelector(state => state.rooms)

  useEffect(() => {
    const chosenRoom = rooms.find((room,i) => room.id === id)
    setRoom(chosenRoom)
  })

  return (
    
      <div>
        {room ? room.name: null}
      </div>
  )
}

export default RoomDetails