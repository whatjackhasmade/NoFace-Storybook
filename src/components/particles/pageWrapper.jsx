import React from "react"
import queryString from "query-string"

import useFooterMenuOne from "./hooks/useFooterMenuOne"
import useFooterMenuTwo from "./hooks/useFooterMenuTwo"
import useHeaderMenu from "./hooks/useHeaderMenu"

const PageWrapper = ({ element, props }) => (
  <ProcessedProps {...props}>{element}</ProcessedProps>
)

const ProcessedProps = props => {
  const footerMenuOne = useFooterMenuOne()
  const footerMenuTwo = useFooterMenuTwo()
  const headerMenu = useHeaderMenu()
  const queries = queryString.parse(props.location.search)

  const newProps = {
    ...props,
    footerMenus: {
      one: footerMenuOne,
      two: footerMenuTwo,
    },
    headerMenus: {
      one: headerMenu,
    },
    queries,
  }

  return (
    <React.Fragment>
      {React.cloneElement(props.children, newProps)}
    </React.Fragment>
  )
}

export default PageWrapper
