import React, { useEffect, useState } from 'react'
import type { DetailsProps, RoomType } from '../types'

const rooms = require('@monorepo/backend/Rooms.json')

const RoomDetails = ({id}: DetailsProps) => {
  
  const [room: RoomType, setRoom] = useState({})
  
  useEffect(() => {
    const chosenRoom: RoomType = rooms.find((room: RoomType) => room.id === id)
    setRoom(chosenRoom)
  })
  
  return (
    room ?
      <div>
        {room.name}
      </div>
      : null
  )
}

export default RoomDetails