import React, { useEffect }  from 'react'
import Room from '../Room/Room.jsx'
import type { RoomsType, RoomType, UserType } from '../../types'
import getRooms from '../../redux/actionCreators/GetRoomsThunk'
import ScrollToBottom from 'react-scroll-to-bottom'
import { makeStyles } from '@material-ui/core/styles'
import { Grid } from 'react-spinners-css'
import { useSelector, useDispatch } from 'react-redux'
const useStyles = makeStyles(theme => ({
  scrollList: {
    height: '90vh'
  }
}))

const Rooms = () => {
  const classes = useStyles()
  
  const rooms = useSelector(state => state.rooms)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRooms())
  }, [])
  
  return (
    <ScrollToBottom className={classes.scrollList}>
      {rooms.map((room: RoomType, i) => <Room key={i} room={room}  />)}
    </ScrollToBottom>
  )
}

export default Rooms