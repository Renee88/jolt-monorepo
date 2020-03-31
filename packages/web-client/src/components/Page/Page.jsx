import React, { useEffect, useState } from 'react'
import Users from '../Users/Users.jsx'
import Talks from '../Talks/Talks.jsx'
import Rooms from '../Rooms/Rooms.jsx'
import UserDetails from '../UserDetails/UserDetails.jsx'
import TalkDetails from '../TalkDetails/TalkDetails.jsx'
import RoomDetails from '../RoomDetails/RoomDetails.jsx'
import {useSelector} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  page: {
    display: 'flex'
  }
}))

const Page = ({match, data}: {match: Object, data: Object[]}) => {
  const classes = useStyles()

const userId = useSelector(state=> state.userId)
  
  const [page: string, setPage] = useState('')
  
  useEffect(() => {
    const path: string = match.url.split('/')[1]
    setPage(path)
  }, [page])
  
  return (
    page === 'users' ?
      <div className={classes.page}>
        <Users users = {data}/>
        <UserDetails id={match.params.id}/>
      </div> :
      page === 'talks' ?
        <div className={classes.page}>
          <Talks talks={data}/>
          <TalkDetails id={match.params.id} talks={data}/>
        </div> :
        page === 'rooms' ?
          <div className={classes.page}>
            <Rooms rooms={data} userId={userId}/>
            <RoomDetails id={match.params.id} rooms={data}/>
          </div>
          : null
  
  )
}

export default Page