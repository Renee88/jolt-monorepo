import React, { useEffect, useState, Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getUsers from '../../redux/actionCreators/GetUsersThunk'
import ScrollToBottom from 'react-scroll-to-bottom'
import { makeStyles } from '@material-ui/core/styles'
import type { UsersType } from '../../types'
import { Grid } from 'react-spinners-css'
import User from '../User/User.jsx'

const useStyles = makeStyles(theme => ({
  scrollList: {
    height: '90vh'
  }
}))


const Users = () => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const jolters = useSelector(state => state.jolters)
  
  useEffect(() => {
    dispatch(getUsers())
  },[])
    
    return (
      <ScrollToBottom className={classes.scrollList}>
        {jolters.map((user, i) => <User key={i} user={user} />)}
      </ScrollToBottom>
    )
  
}


export default Users


