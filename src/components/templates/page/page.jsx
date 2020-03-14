import React from "react"
import { useQuery } from "@apollo/client"

import ComponentParser from "particles/componentParser"
import SEO from "particles/seo"

import NODE_BY_URI from "queries/node/NODE_BY_URI.gql"

import Loader from "molecules/loader/loader"

import Footer from "organisms/footer/footer"
import Header from "organisms/header/header"

const Page = props => {
  const uri = props?.uri

  if (!uri) return <PageTemplate {...props} />

  const { data, error, loading } = useQuery(NODE_BY_URI, {
    networkPolicy: `no-cache`,
    variables: { uri },
  })

  console.log(data)

  if (loading) return <Loader />
  if (error) return `Error! ${error}`
  const single = data?.nodeByUri
  if (!single) return `Error! No page found`

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
