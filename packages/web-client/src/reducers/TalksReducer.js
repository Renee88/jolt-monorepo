import type { TalksType } from '../components/types'

const talks = require('@monorepo/backend/Data/Talks.json')

const TalksReducer = (state: TalksType = talks, action: any) => {
  switch(action.type){
    case 'GET_TALKS':
      return action.talks
    default:
      return state
  }
}

export default TalksReducer