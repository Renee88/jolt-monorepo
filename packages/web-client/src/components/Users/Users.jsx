import React, { useEffect, useState } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import User from '../User/User.jsx'
import { makeStyles } from '@material-ui/core/styles'
import type { UsersType } from '../../types'
import { Grid } from 'react-spinners-css'

import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const useStyles = makeStyles(theme => ({
  scrollList: {
    height: '90vh'
  }
}))

const GET_JOLTERS = gql`
    query GetJolters {
      jolters {
            id
            name
            picture
            email
      }
}`

const Users = () => {

  const classes = useStyles()

  const { data, loading, error } = useQuery(GET_JOLTERS);

  if (loading) return <Grid className='spinner' color='#7f58af' />;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Oops, my bad </p>


  return (
    <ScrollToBottom className={classes.scrollList}>
      {data.jolters.map((user, i) => <User key={i} user={user} />)}
    </ScrollToBottom>
  )
}

export default Users


