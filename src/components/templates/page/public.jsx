import React from "react"
import Helmet from "react-helmet"

import Footer from "@organisms/footer/footer"
import Header from "@organisms/header/header"

const PublicPage = ({ children, footerMenus, headerMenus, title }) => (
  <>
    {title && (
      <Helmet defer={false}>
        <title>{title} - Makeup &amp; Mane</title>
      </Helmet>
    )}
    <Header menus={headerMenus} />
    {children}
    <Footer menus={footerMenus} />
  </>
)

export default PublicPage
