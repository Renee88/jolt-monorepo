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
            dataSource.sessionAPI.getSession({ id })
    }
}