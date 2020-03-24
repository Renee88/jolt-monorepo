import React, { useEffect, useState } from 'react'
import type { DetailsProps, TalkType } from '../types'

const talks = require('@monorepo/backend/Talks.json')

const TalkDetails = ({id}: DetailsProps) => {
  
  const [talk: ?TalkType, setUser] = useState({})
  
  useEffect(() => {
    setUser(talks.find((talk: TalkType) => talk.youTubeID === id))
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