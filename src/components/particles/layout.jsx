import React from "react"
import { bool, node } from "prop-types"

import SEO from "@particles/seo"

import Footer from "@organisms/footer/footer"
import Header from "@organisms/header/header"

const Layout = props => {
  const {
    children,
    footer,
    gatsbyContext,
    header,
    headerVariant,
    pageContext,
  } = props

  const { seo } = pageContext

  return (
    <React.Fragment>
      {seo && <SEO data={seo} />}
      {/* Start of visual page components */}
      <div className="wrapper">
        {header && (
          <Header
            navigation={gatsbyContext && gatsbyContext.headerMenu}
            variant={headerVariant}
          />
        )}
        {children && (
          <main>
            <div className="grid">{children}</div>
          </main>
        )}
        {footer && (
          <Footer navigation={gatsbyContext && gatsbyContext.footerMenus} />
        )}
      </div>
      {/* End of visual page components */}
    </React.Fragment>
  )
}

// Expected prop values
Layout.propTypes = {
  children: node.isRequired,
  footer: bool.isRequired,
  header: bool.isRequired,
}

// By default include the header and footer unless specified false
Layout.defaultProps = {
  footer: true,
  header: true,
}

export default Layout
