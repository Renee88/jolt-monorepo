const { gql } = require('apollo-server');

const typeDefs = gql`

  type User {
    id: ID!
    name: String!
    picture: String
    email: String!
    age: Float!
    createdAt: String!
  }

  type Talk {
    id: ID!
    name: String!
    transcript: String
    createdAt: String!
  }

  type Room {
    id: ID!
    name: String!
    location: String!
    createdAt: String!
  }

  type Session {
		sessionID: ID!
		talkID: ID!
		roomID: ID!
		jolterID: ID!
		createdAt: String!
    talk: Talk!
    room: Room!
    jolter: User!
  }

  type Query {
    talk(id: ID!): Talk! # for the kicks
    talks: [Talk]
    room(id: ID!): Room! 
    rooms: [Room] # these queries won't be used
    jolter(id: ID!): User! # In the webapp
    jolters: [User]
    session(id: ID): Session!
    sessions: [Session]
  }

  type SessionAddedResponse {
    success: Boolean!
    sessionID: String
  }

  type Mutation {
    addSession(talkID: ID!, jolterID: ID!, roomID: ID!): SessionAddedResponse!
  }
`;

module.exports = typeDefs;