import React, { useEffect, useState } from 'react'
import type { TalksType, TalkType } from '../../types'

const TalkDetails = ({id, talks}: {id: string, talks: TalksType}) => {
  
  const [talk: ?TalkType, setUser] = useState({})
  
  useEffect(() => {
    setUser(talks.find((talk: TalkType) => talk.id === id))
  })
  
  return (
    talk ?
      <div>
        {talk.name}
      </div>
      : null
  )
}

export default TalkDetails