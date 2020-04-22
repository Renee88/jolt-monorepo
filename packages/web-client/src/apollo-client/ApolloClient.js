import ApolloClient from 'apollo-boost';
import { NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';




export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});