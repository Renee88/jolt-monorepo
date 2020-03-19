import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  logo:{
    fontSize: 60,
    color: 'white',
    fontFamily: 'poppins',
    fontWeight: 'bold',
    marginRight: 20
  }
}))

const Logo = () => {
  
  const classes = useStyles()
  
  return(
    <span className={classes.logo}>Jolt</span>
  )
}

export default Logo