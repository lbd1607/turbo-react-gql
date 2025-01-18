import gql from "graphql-tag";
import { Resolvers } from "../client/types";
import UsersAPI from "../data/Users.js";
import { fromGlobalId, toGlobalId } from "./utils.js";

export const typeDefs = gql`
  extend type Query {
    users: [User!]
  }

  type User {
    id: ID!
    name: String!
  }
`;

export const toUserId = (id: string) => toGlobalId("User", id);

export const fromUserId = (id: string) => ({
  typename: fromGlobalId(id)[0],
  id: fromGlobalId(id)[1],
});

export const resolvers: Resolvers = {
  Query: {
    users: async () => await UsersAPI.getUsers(),
  },
  User: {
    id: ({ id }) => toUserId(id),
    name: ({ name }) => name,
  },
};
