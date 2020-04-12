import React, { useEffect, useState } from 'react'
import type { TalksType, TalkType } from '../../types'
import { Grid } from 'react-spinners-css'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const GET_TALKS = gql`
    query GetTalks {
      talks {
            id
            name
            transcript
      }
    }
`

const TalkDetails = ({id}: {id: string}) => {
  
  const { data, loading, error } = useQuery(GET_TALKS);

  if (loading) return <Grid className='spinner' color='#7f58af' />
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Oops, my bad </p>

  const {talks} = data
  const talk = data.talks.find((talk: TalkType) => talk.id === id)
  
  return (
      <div>
        {id ? talk.name : null}
      </div>
  )
}

export default TalkDetails