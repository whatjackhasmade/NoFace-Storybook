import React from "react"
import fetch from "isomorphic-unfetch"
import { SWRConfig } from "swr"
import { ThemeProvider } from "styled-components"

import ApplicationState from "./context/applicationState"
import GlobalStyle from "./globalStyle"
import ThemeDefault from "./themeDefault"

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
    <ApplicationState>
      <ThemeProvider theme={ThemeDefault}>
        <>
          <GlobalStyle />
          <main className="wrapper">{children}</main>
        </>
      </ThemeProvider>
    </ApplicationState>
  </SWRConfig>
)

export default RootWrapper
