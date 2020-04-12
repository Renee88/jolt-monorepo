import React from 'react'
import Talk from '../Talk/Talk.jsx'
import ScrollToBottom from 'react-scroll-to-bottom'
import { makeStyles } from '@material-ui/core/styles'
import type { TalksType } from '../../types'
import { Grid } from 'react-spinners-css'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const useStyles = makeStyles(theme => ({
  scrollList: {
    height: '90vh'
  }
}))

const GET_TALKS = gql`
    query GetTalks {
      talks {
            id
            name
            transcript
      }
    }
`

const Talks = () => {
  const classes = useStyles()

  const { data, loading, error } = useQuery(GET_TALKS)

  if (loading) return <Grid className='spinner' color='#7f58af' />
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Oops, my bad </p>


  return (
    <ScrollToBottom classNAme={classes.scrollList}>
      {data.talks.map((talk, i) => <Talk key={i} talk={talk} />)}
    </ScrollToBottom>
  )
}

export default Talks