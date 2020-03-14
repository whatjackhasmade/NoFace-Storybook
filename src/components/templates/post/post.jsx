import React from "react"
import { Container, Row, Col } from "react-grid-system"
import { Hidden, setConfiguration } from "react-grid-system"
import { useQuery } from "@apollo/client"

import ComponentParser from "particles/componentParser"
import SEO from "particles/seo"
import POST_BY_TITLE from "queries/post/POST_BY_TITLE.gql"

import Loader from "molecules/loader/loader"

import Footer from "organisms/footer/footer"
import Header from "organisms/header/header"

const Post = props => {
  const title = props?.postTitle

  if (!title) return <PostTemplate {...props} />

  const { data, error, loading } = useQuery(POST_BY_TITLE, {
    networkPolicy: `no-cache`,
    variables: { title },
  })

  if (loading) return <Loader />
  if (error) return `Error! ${error}`
  const foundPage = data?.posts?.nodes.length === 1
  if (!foundPage) return `Error: No page found`
  const [single] = data?.posts?.nodes

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
