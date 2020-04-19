import React, { useState } from 'react'
import Logo from '../Logo/Logo.jsx'
import DrawerMenu from '../DrawerMenu/DrawerMenu.jsx'
import { makeStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#4B3FC9',
    background: 'linear-gradient(45deg,#838DFF,#F88AC1)',
    height: '10vh'
  }
}))

const NavBar = () => {
  const classes = useStyles()
  const [isDrawerOpen: boolean, setOpen] = useState(false)
  
  return (
    <div className={classes.navigation}>
      <Logo/>
      <DrawerMenu isDrawerOpen={isDrawerOpen} setOpen={setOpen}/>
      <Menu onClick={() => setOpen(true)} style={{color: 'white', marginRight: 20}}/>
    </div>
  )
}

export default NavBar