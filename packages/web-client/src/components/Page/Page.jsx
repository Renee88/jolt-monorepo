import React, { useEffect, useState } from 'react'
import Users from '../Users/Users.jsx'
import Talks from '../Talks/Talks.jsx'
import Rooms from '../Rooms/Rooms.jsx'
import UserDetails from '../UserDetails/UserDetails.jsx'
import TalkDetails from '../TalkDetails/TalkDetails.jsx'
import RoomDetails from '../RoomDetails/RoomDetails.jsx'
import { makeStyles } from '@material-ui/core/styles'
import { UserStory } from '../User/User.stories'

const useStyles = makeStyles(theme => ({
  page: {
    display: 'flex'
  }
}))

const Page = ({route, match}) => {
  const classes = useStyles()
  
  const [page, setPage] = useState('')
  const [user, setUser] = useState(null)
  const [talk, setTalk] = useState(null)
  const [room, setRoom] = useState(null)
  
  useEffect(() => {
    console.log(route, match)
    setPage(route)
  })
  
  console.log(match)
  
  return (
    page === 'users' ?
      <div className={classes.page}>
        <Users setUser={setUser}/>
        {match ? <UserDetails id={match.params.id}/> : null}
      </div> :
      page === 'talks' ?
        <div className={classes.page}>
          <Talks setTalk={setTalk}/>
          {match ? <TalkDetails talk={talk}/> : null}
        </div> :
        page === 'rooms' ?
          <div className={classes.page}>
            <Rooms setRoom={setRoom}/>
            {match ? <RoomDetails room={room}/> : null}
          </div>
          : null
  
  )
}

export default Page