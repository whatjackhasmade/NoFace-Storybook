import "intersection-observer"
import React from "react"
import fetch from "isomorphic-unfetch"
import { SWRConfig } from "swr"

import ApolloWordPress from "./apollo/wrapper"
import ApplicationState from "./context/applicationState"

const fetcher = async url => {
  const response = await fetch(url)
  if (response.status !== 200) return response
  const jsonResponse = await response.json()
  return jsonResponse
}

const RootWrapper = ({ children }) => (
  <SWRConfig
    value={{
      fetcher: (...args) => fetcher(...args),
    }}
  >
    <ApolloWordPress>
      <ApplicationState>{children}</ApplicationState>
    </ApolloWordPress>
  </SWRConfig>
)

export default RootWrapper
