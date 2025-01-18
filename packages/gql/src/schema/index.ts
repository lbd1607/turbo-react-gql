import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
import {
  typeDefs as UserTypeDefs,
  resolvers as UserResolvers,
} from "./User.js";

const Query = gql`
  type Query {
    _empty: String
  }
`;

const QueryResolvers = {
  Query: {
    _empty: () => {},
  },
};

export const schema = makeExecutableSchema({
  typeDefs: [Query, UserTypeDefs],
  resolvers: [QueryResolvers, UserResolvers],
});
