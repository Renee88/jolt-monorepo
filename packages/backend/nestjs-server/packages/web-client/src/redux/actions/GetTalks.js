import type {TalksType} from '../../types'

export const getTalks = (talks: TalksType) => ({
    type: 'GET_TALKS',
    talks
})