import React, { useEffect, useState } from 'react'
import type { RoomsType, RoomType } from '../../types'

const RoomDetails = ({id, rooms}: {id: string, rooms: RoomsType}) => {
  
  const [room: RoomType, setRoom] = useState({})
  
  useEffect(() => {
    const chosenRoom: ?RoomType = rooms.find((room: RoomType) => room.id === id)
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