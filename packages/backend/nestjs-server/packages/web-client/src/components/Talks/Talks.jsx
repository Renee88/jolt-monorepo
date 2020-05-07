import React, { useEffect } from 'react'
import Talk from '../Talk/Talk.jsx'
import { useSelector, useDispatch } from 'react-redux'
import ScrollToBottom from 'react-scroll-to-bottom'
import { makeStyles } from '@material-ui/core/styles'
import type { TalksType } from '../../types'
import { Grid } from 'react-spinners-css'
import getTalks from '../../redux/actionCreators/GetTalksThunk'


const useStyles = makeStyles(theme => ({
  scrollList: {
    height: '90vh'
  }
}))

const Talks = () => {
  const classes = useStyles()

  const talks = useSelector(state => state.talks)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getTalks())
  },[])



  return (
    <ScrollToBottom classNAme={classes.scrollList}>
      {talks.map((talk, i) => <Talk key={i} talk={talk} />)}
    </ScrollToBottom>
  )
}

export default Talks