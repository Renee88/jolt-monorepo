import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  logo: {
    fontSize: 60,
    color: 'white',
    fontFamily: 'poppins, sans-serif',
    fontWeight: '600',
    marginLeft: 20,
    cursor: 'pointer'
  },
  appName: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Dancing Script, cursive'
  }
}))

const Logo = () => {
  
  const classes = useStyles()
  
  return (
    <Link to={`/`}>
      <span className={classes.logo}>Jolt</span><span className={classes.appName}> Curation</span>
    </Link>
  )
}

export default Logo