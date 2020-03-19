import React from 'react'
import Logo from '../Logo/Logo.jsx'
import { makeStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4B3FC9',
    height: '10vh'
  }
}))

const NavBar = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.navigation}>
      <Menu style={{color: 'white', marginLeft: 20}}/>
      <Logo/>
    </div>
  )
}

export default NavBar