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

const Page = ({match}: {match: Object}) => {
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
        <Users />
        <UserDetails id={match.params.id}/>
      </div> :
      page === 'talks' ?
        <div className={classes.page}>
          <Talks />
          <TalkDetails id={match.params.id} />
        </div> :
        page === 'rooms' ?
          <div className={classes.page}>
            <Rooms  userId={userId} />
            <RoomDetails id={match.params.id} />
          </div>
          : null
  
  )
}

export default Page