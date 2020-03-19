import React from 'react'
import Talk from '../Talk/Talk.jsx'

const talks = require('@monorepo/backend/Talks.json')

const Talks = ({talks,setTalk}) => {
return (
  <div>
    {talks.map((talk, i) => <Talk key = {i} talk = {talk} showTalkPage={setTalk}/>)}
  </div>
)
}

export default Talks