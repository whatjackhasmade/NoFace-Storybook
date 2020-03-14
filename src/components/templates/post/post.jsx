import React from "react"
import { Container, Row, Col } from "react-grid-system"
import { Hidden, setConfiguration } from "react-grid-system"
import { useQuery } from "@apollo/client"

import ComponentParser from "particles/componentParser"
import SEO from "particles/seo"

import NODE_BY_URI from "queries/node/NODE_BY_URI.gql"

import Loader from "molecules/loader/loader"

import Footer from "organisms/footer/footer"
import Header from "organisms/header/header"

const Post = props => {
  const uri = props?.uri

  if (!uri) return <PostTemplate {...props} />

  const { data, error, loading } = useQuery(NODE_BY_URI, {
    networkPolicy: `no-cache`,
    variables: { uri },
  })

  if (loading) return <Loader />
  if (error) return `Error! ${error}`
  const single = data?.nodeByUri
  if (!single) return `Error! No post found`
  const revisions = single?.revisions?.nodes
  const hasRevisions = revisions && revisions.length > 0

  const context = {
    ...props.pageContext,
    blocks: single.blocks,
  }

  return (
    <PostTemplate
      {...props}
      footerMenus={data?.footerMenus?.nodes}
      headerMenus={data?.headerMenus?.nodes}
      pageContext={context}
    />
  )
}

const PostTemplate = ({ footerMenus, headerMenus, pageContext }) => {
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

export default Post
