import React from 'react'
import { Menu, MenuItem } from '@material-ui/core'

const StatusMenu = ({anchorEl, setAnchorEl, setStatus}: { anchorEl: any, setAnchorEl: ({} | null) => void, setStatus: (string)=> void }) => {
  const requsetStatuses = ['PENDING', 'APPROVED', 'DECLINED']
  
  const handleClose = (event, index) => {
    const requestStatus = requsetStatuses[index]
    if (requestStatus) {
      setStatus(requestStatus)
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
      
      {requsetStatuses.map((requsetStatus, index) =>
        <MenuItem key={index} onClick={(event) => handleClose(event, index)}>{requsetStatus}</MenuItem>
      )}
    
    </Menu>
  )
}

export default StatusMenu