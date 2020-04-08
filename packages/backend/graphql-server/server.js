const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type User {
    id: ID!
    firstName: String!
    lastName: String!
    createdAt: Number!
}

type Talk {
    id: ID!
    title: String!
    createdAt: Number!
}

type Room {
    id: ID!
    name: String!
    location: String!
    createdAt: Number!
}

type Session {
		id: ID!
		talkId: ID!
		roomId: ID!
		jolterId: ID!
		createdAt: Number!

    talk: Talk!
    room: Room!
    jolter: User!
}

type Query {
    talk(id: ID!): Talk! # for the kicks
    room(id: ID!): Room! # these queries won't be used
    user(id: ID!): User! # In the webapp
    session(id: ID): Session!
}
`

const talks = require('../Data/Talks.json')
const users = require('../Data/Users.json')
const rooms = require('../Data/Rooms.json')