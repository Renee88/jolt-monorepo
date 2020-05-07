import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  logo: {
    fontSize: 60,
    color: 'white',
    fontFamily: 'poppins',
    fontWeight: 'bold',
    marginRight: 20
  }
}))

const Logo = () => {
  
  const classes = useStyles()
  
  return (
    <Link to={`/`}>
      <span className={classes.logo}>Jolt</span>
    </Link>
  )
}

export default Logo