import React from "react"

import ComponentParser from "particles/componentParser"
import SEO from "particles/seo"

import Footer from "organisms/footer/footer"
import Header from "organisms/header/header"

const Page = ({ footerMenus, headerMenus, pageContext }) => {
  const blocks = pageContext?.blocks
  const seo = pageContext?.seo

  return (
    <>
      {seo && <SEO {...seo} />}
      <Header menus={headerMenus} />
      {blocks && <ComponentParser content={blocks} />}
      <Footer menus={footerMenus} />
    </>
  )
}

export default Page
