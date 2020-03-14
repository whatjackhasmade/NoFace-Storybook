import React from "react"
import { useQuery } from "@apollo/client"

import PAGE_BY_TITLE from "queries/page/PAGE_BY_TITLE.gql"

import ComponentParser from "particles/componentParser"
import SEO from "particles/seo"

import Loader from "molecules/loader/loader"

import Footer from "organisms/footer/footer"
import Header from "organisms/header/header"

const Page = props => {
  const title = props?.pageTitle

  if (!title) return <PageTemplate {...props} />

  const { data, error, loading } = useQuery(PAGE_BY_TITLE, {
    networkPolicy: `no-cache`,
    variables: { title },
  })

  if (loading) return <Loader />
  if (error) return `Error! ${error}`
  const foundPage = data?.pages?.nodes.length === 1
  if (!foundPage) return `Error: No page found`
  const [single] = data?.pages?.nodes

  const context = {
    ...props.pageContext,
    blocks: single.blocks,
  }

  return (
    <PageTemplate
      {...props}
      footerMenus={data?.footerMenus?.nodes}
      headerMenus={data?.headerMenus?.nodes}
      pageContext={context}
    />
  )
}

const PageTemplate = ({ footerMenus, headerMenus, pageContext }) => {
  const blocks = pageContext?.blocks
  const seo = pageContext?.seo

  return (
    <>
      {seo && <SEO {...seo} />}
      <Header menus={headerMenus} />
      <main className="wrapper">
        {blocks && <ComponentParser content={blocks} />}
      </main>
      <Footer menus={footerMenus} />
    </>
  )
}

export default Page
