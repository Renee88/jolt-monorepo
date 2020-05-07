import React, { useEffect, useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ChatIcon from '@material-ui/icons/Chat'
import GroupIcon from '@material-ui/icons/Group'
import EventIcon from '@material-ui/icons/Event';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { Divider } from '@material-ui/core'
import { Help } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: '15vw'
  },
  drawerTab: {
    color: 'black',
    fontFamily: 'poppins'
  }
}))

const DrawerMenu = ({isDrawerOpen, setOpen}: {
  isDrawerOpen: boolean, setOpen: (isDrawerOpen: boolean) => void
}) => {
  
  const classes = useStyles()
  const anchor = 'right'
  const MenuTabs = ['Users', 'Talks', 'Rooms', 'Session Requests', 'Sessions']
  
  const toggleDrawer = () => {
    setOpen(false)
  }
  
  const list = () => (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={() => toggleDrawer()}
      onKeyDown={() => toggleDrawer()}
    >
      <List>
        {MenuTabs.map((tab, i) => (
          tab === 'Users' ?
            <Link key={i} to={`/users`} className={classes.drawerTab}>
              <ListItem button key={tab}>
                <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                <ListItemText primary={tab}/>
              </ListItem>
            </Link> :
            tab === 'Talks' ?
              <Link key={i} to={`/talks`} className={classes.drawerTab}>
                <ListItem button key={tab}>
                  <ListItemIcon><ChatIcon/></ListItemIcon>
                  <ListItemText primary={tab}/>
                </ListItem>
              </Link> :
              tab === 'Rooms' ?
                <Link key={i} to={`/rooms`} className={classes.drawerTab}>
                  <ListItem button key={tab}>
                    <ListItemIcon><GroupIcon/></ListItemIcon>
                    <ListItemText primary={tab}/>
                  </ListItem>
                </Link> :
                tab==='Session Requests' ?
                  <Link key={i} to={`/session-requests`} className={classes.drawerTab}>
                    <ListItem button key={tab}>
                      <ListItemIcon><GroupIcon/></ListItemIcon>
                      <ListItemText primary={tab}/>
                    </ListItem>
                  </Link>:
                  tab==='Sessions' ?
                  <Link key={i} to={`/sessions`} className={classes.drawerTab}>
                    <ListItem button key={tab}>
                      <ListItemIcon><EventIcon/></ListItemIcon>
                      <ListItemText primary={tab}/>
                    </ListItem>
                  </Link>: null
        ))}
      </List>
      <Divider/>
      <List>
        <Link to='/landing' className={classes.drawerTab}>
        <ListItem>
          <ListItemIcon><Help/></ListItemIcon>
          <ListItemText>Help</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  )
  
  return (
    <Drawer anchor={anchor} open={isDrawerOpen} onClose={() => toggleDrawer()}>
      {list()}
    </Drawer>
  )
}

export default DrawerMenu