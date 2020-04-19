import React, { useEffect, useState } from 'react'
import type { TalksType, TalkType } from '../../types'
import { Grid } from 'react-spinners-css'
import {useSelector} from 'react-redux'

const TalkDetails = ({id}: {id: string}) => {
  
  const [talk, setTalk] = useState({})

  const talks = useSelector(state => state.talks)

  useEffect(() => {
    const chosenTalk = talks.find((talk,i) => talk.id === id)
    setTalk(chosenTalk)
  })
  
  return (
      <div>
        {talk ? talk.name : null}
      </div>
  )
}

export default TalkDetails