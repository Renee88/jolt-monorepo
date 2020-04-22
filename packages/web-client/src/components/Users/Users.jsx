import React, { useEffect, useState, Component } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ScrollToBottom from 'react-scroll-to-bottom'
import { makeStyles } from '@material-ui/core/styles'
import type { UsersType } from '../../types'
import { Grid } from 'react-spinners-css'
import User from '../User/User.jsx'
import getUsersFromDB from '../../redux/actionCreators/GetUsersThunk'

const useStyles = makeStyles(theme => ({
  scrollList: {
    height: '90vh'
  }
}))


const Users = () => {
  const dispatch = useDispatch()
  const {users} = useSelector(state => state)
  
  useEffect(() => {
    dispatch(getUsersFromDB())
  },[])
    
    return (
      <ScrollToBottom className="scroll-list">
        {users.map((user, i) => <User key={i} user={user} />)}
      </ScrollToBottom>
    )
  
}


export default Users


