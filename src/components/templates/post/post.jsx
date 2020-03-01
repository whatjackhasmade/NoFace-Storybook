import React from "react"
import { Container, Row, Col } from "react-grid-system"
import { Hidden, setConfiguration } from "react-grid-system"

// PARTICLES
import ParseHTML from "particles/parseHTML"
import SEO from "particles/seo"

import Footer from "organisms/footer/footer"
import Header from "organisms/header/header"

const Post = ({ footerMenus, headerMenus, pageContext }) => {
  if (!pageContext) return null
  const { author, date, detailedFooter, featuredImage, title } = pageContext
  const { categories, seo } = pageContext
  const acf = pageContext?.PostFields

  const foldData = {
    avatar,
    author: author.name,
    background: featuredImage.xl,
    date,
    light: true,
    title,
  }

  const hasCategory = categories.nodes && categories?.nodes?.length > 0
  const category = hasCategory && categories?.nodes[0]?.slug
  const hasContinued = acf.contentContinued && acf.sidebarMedia
  const hasGallery = acf.galleryEnabled && acf?.gallery?.length > 0
  const hasRelated = acf.relatedPosts && acf?.relatedPosts?.length > 0

  return (
    <>
      <SEO {...seo} />
      <Header menus={headerMenus} />
      <Fold {...foldData} />
      <Container>
        <Row>
          <Col md={4}>
            <MetaIntro>
              <p>{seo.metaDesc}</p>
            </MetaIntro>
            <Instagram />
          </Col>
          <Col md={7} offset={{ md: 1 }}>
            {acf.content && <article>{ParseHTML(acf.content)}</article>}
          </Col>
        </Row>
      </Container>
      {hasRelated && (
        <>
          <Container>
            <Row>
              <Col>
                <h2>Continue Reading Our Chronicles</h2>
              </Col>
            </Row>
          </Container>
        </>
      )}
      <Footer menus={footerMenus} />
    </>
  )
}

export default Post
