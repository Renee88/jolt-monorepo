const { gql } = require('apollo-server');

const typeDefs = gql`
  type Dog {
    dog_name: String
    picture: String
    gender: String
    age: Float
    weight: Float
    vaccinated: Boolean
    neutered: Boolean
  }

  type User {
    id: ID!
    name: String!
    picture: String
    email: String!
    age: Float!
    dogs: [Dog]
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
		id: ID!
		talkId: ID!
		roomId: ID!
		jolterId: ID!
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
  }
`;

module.exports = typeDefs;