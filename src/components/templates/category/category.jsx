import React from "react"
import Helmet from "react-helmet"

import Heading from "@atoms/heading/heading"

import Archive from "@organisms/archive/archive"
import Container from "@organisms/container/container"

const blog = ({ pageContext }) => {
  const { name, posts } = pageContext

  return (
    <>
      <Helmet defer={false}>
        <title>Makeup and Mane - {name} Posts</title>
      </Helmet>
      <Container className="mt-5">
        <Heading level={1} variant={2}>
          Our {name} Posts
        </Heading>
      </Container>
      <Archive
        archivePage={false}
        posts={posts.nodes}
        showDescription={true}
        showPagination={false}
      />
    </>
  )
}

export default blog
