import React from "react"
import { useQuery } from "@apollo/client"

import PAGE_BY_TITLE from "queries/page/PAGE_BY_TITLE"

import ComponentParser from "particles/componentParser"
import SEO from "particles/seo"

import Footer from "organisms/footer/footer"
import Header from "organisms/header/header"

const Page = props => {
  const title = props?.pageTitle

  if (!title) return <PageTemplate {...props} />

  const { data, error, loading } = useQuery(PAGE_BY_TITLE, {
    networkPolicy: `no-cache`,
    variables: { title },
  })

  if (loading) return null
  if (error) return `Error! ${error}`
  const foundPage = data?.pages?.nodes.length === 1
  if (!foundPage) return `Error: No page found`
  const [single] = data?.pages?.nodes

  const context = {
    ...props.pageContext,
    blocks: single.blocks,
  }

  return <PageTemplate {...props} pageContext={context} />
}

const PageTemplate = ({ footerMenus, headerMenus, pageContext }) => {
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
