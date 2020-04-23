import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

const SessionRequestStatusMenu = ({ anchorEl, setAnchorEl, setStatus, sessionRequestID }:
  { anchorEl: any, setAnchorEl: ({ } | null) => void, setStatus: (id: string, status: string) => void , sessionRequestID: string}) => {

  const requestStatuses = ['PENDING', 'APPROVED', 'DECLINED']

  const handleClose = async (event, index) => {
    const requestStatus = requestStatuses[index]
    if (requestStatus) {
      await setStatus(sessionRequestID, requestStatus)
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

      {requestStatuses.map((requestStatus, index) =>
        <MenuItem key={index} onClick={(event) => handleClose(event, index)}>{requestStatus}</MenuItem>
      )}

    </Menu>
  )
}

export default SessionRequestStatusMenu