import type { TalksType } from '../../types'



const TalksReducer = (state: TalksType = [], action: any) => {
  switch(action.type){
    case 'GET_TALKS':
      return action.talks
    default:
      return state
  }
}

export default TalksReducer