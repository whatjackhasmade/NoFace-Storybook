import React from "react"

import ComponentParser from "@particles/componentParser"
import SEO from "@particles/seo"

import Footer from "@organisms/footer/footer"
import Header from "@organisms/header/header"

const Page = ({ footerMenus, headerMenus, pageContext }) => {
  if (!pageContext) return null
  const { blocks, seo } = pageContext

  return (
    <>
      <SEO {...seo} />
      <Header menus={headerMenus} />
      <ComponentParser content={blocks} />
      <Footer menus={footerMenus} />
    </>
  )
}

export default Page
