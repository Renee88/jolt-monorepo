import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

const SessionStatusMenu = ({ anchorEl, setAnchorEl, setStatus, sessionID}: 
  { anchorEl: any, setAnchorEl: ({ } | null) => void, setStatus: (id: string, status: string) => void , sessionID: string}) => {
  
  const sessionStatuses = ['APPROVED', 'CANCELED']

  const handleClose = async (event, index) => {
    const sessionStatus = sessionStatuses[index]
    if (sessionStatus) {
      await setStatus(sessionID, sessionStatus)
    }
    setAnchorEl(null)
  }

  return (
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >

      {sessionStatuses.map((requestStatus, index) =>
        <MenuItem key={index} onClick={(event) => handleClose(event, index)}>{requestStatus}</MenuItem>
      )}

    </Menu>
  )
}

export default SessionStatusMenu