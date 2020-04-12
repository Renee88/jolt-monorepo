const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers')
const {createStore} = require('./utils')

const store = createStore()

const JolterAPI = require('./data-sources/jolter')
const TalkAPI = require('./data-sources/talk')
const SessionAPI = require('./data-sources/session')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        jolterAPI: new JolterAPI({store}),
        talkAPI: new TalkAPI({store}),
        sessionAPI: new SessionAPI({store})
    })
});

server.listen(5000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});