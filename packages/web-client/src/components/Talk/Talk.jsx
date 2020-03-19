import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  talk: {
    width: '25vw',
    fontFamily: 'poppins'
  }
}))

const Talk = ({talk, showTalkPage}) => {
  const classes = useStyles()
  
  return (
    <Card className={classes.talk} onClick={() => {showTalkPage()}}>
      <CardContent>
        {talk.name}
      </CardContent>
    </Card>
  )
}

export default Talk