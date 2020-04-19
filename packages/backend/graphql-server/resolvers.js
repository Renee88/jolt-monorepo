module.exports = {
    Query: {
        jolters: (_, __, { dataSources }) =>
            dataSources.jolterAPI.getJolters(),
        jolter: (_, { id }, { dataSources }) =>
            dataSources.jolterAPI.getJolter({ id }),
        talks: (_, __, { dataSources }) =>
            dataSources.talkAPI.getTalks(),
        talk: (_, { id }, { dataSources }) =>
            dataSources.talkAPI.getTalk({ id }),
        session: (_, { id }, { dataSource }) =>
            dataSource.sessionAPI.getSession({ id }),
        sessions: (_, __, {dataSources}) => 
            dataSources.sessionAPI.getSessions(),
        rooms: (_, __, {dataSources}) => 
            dataSources.roomsAPI.getRooms()
        
    },
    Mutation: {
        addSession: (_, { talkID, jolterID, roomID }, { dataSources }) =>
            dataSources.sessionAPI.addSession(talkID, jolterID, roomID)
    }
}