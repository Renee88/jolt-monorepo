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

const Talks = ({talks}: {talks: TalksType}) => {
  const classes = useStyles()


  return (
    <ScrollToBottom classNAme={classes.scrollList}>
      {talks.map((talk, i) => <Talk key={i} talk={talk} />)}
    </ScrollToBottom>
  )
}

export default Talks