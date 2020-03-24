import React from 'react'
import Talk from '../Talk/Talk.jsx'
import ScrollToBottom from 'react-scroll-to-bottom'
import { makeStyles } from '@material-ui/core/styles'

const talks = require('@monorepo/backend/Talks.json')

const useStyles = makeStyles(theme=> ({
  scrollList: {
    height: '90vh'
  }
}))

const Talks = () => {
const classes = useStyles()

return (
  <ScrollToBottom classNAme = {classes.scrollList}>
    {talks.map((talk, i) => <Talk key = {i} talk = {talk} />)}
  </ScrollToBottom>
)
}

export default Talks