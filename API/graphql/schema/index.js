const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type User {
  userId: ID!
  name: String!
  fans: String!
  following: String!
  heart: String!
  category: String!
}


type RootMutation {
  searchUser(category: String!): User
}

schema {
    query: RootMutation
}
`);
