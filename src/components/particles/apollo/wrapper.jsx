import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/client"
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from "apollo-cache-inmemory"
import introspectionQueryResultData from "./fragments.json"

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
})

const uri = `https://noface.local/wp/graphql/`

const cache = new InMemoryCache({
  fragmentMatcher,
})

const client = new ApolloClient({
  cache,
  uri,
})

const ApolloWrapper = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export default ApolloWrapper
