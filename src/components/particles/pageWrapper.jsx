import React from "react"
import queryString from "query-string"

import { ThemeProvider } from "styled-components"

import GlobalStyle from "./globalStyle"
import ThemeDefault from "./themeDefault"

import useFooterMenus from "./hooks/useFooterMenus"
import useHeaderMenus from "./hooks/useHeaderMenus"

const PageWrapper = ({ element, props }) => (
  <ThemeProvider theme={ThemeDefault}>
    <GlobalStyle />
    <ProcessedProps {...props}>{element}</ProcessedProps>
  </ThemeProvider>
)

const ProcessedProps = props => {
  const footerMenus = useFooterMenus()
  const headerMenus = useHeaderMenus()
  const queries = queryString.parse(props?.location?.search)

  const newProps = {
    ...props,
    footerMenus,
    headerMenus,
    queries,
  }

  return (
    <React.Fragment>
      {React.cloneElement(props.children, newProps)}
    </React.Fragment>
  )
}

export default PageWrapper
