import React from "react"
import {
  Container,
  Hidden,
  Row,
  Col,
  setConfiguration,
} from "react-grid-system"

// PARTICLES
import ParseHTML from "@particles/parseHTML"
import SEO from "@particles/seo"

// HOOKS
import useAllCustomers from "@particles/hooks/useAllCustomers"
import useAllTestimonials from "@particles/hooks/useAllTestimonials"

// MOLECULES
import Instagram from "@molecules/instagram/instagram"

// ORGANISMS
import Archive from "@organisms/archive/archive"
import Customers from "@organisms/customers/customers"
import Fold from "@organisms/fold/fold"
import Footer from "@organisms/footer/footer"
import Header from "@organisms/header/header"
import MetaIntro from "@organisms/meta-intro/metaIntro"
import Testimonials from "@organisms/testimonials/testimonials"

// BLOG ORGANISMS
import Category from "./parts/category"
import Gallery from "./parts/gallery"
import Share from "./parts/share"
import SidebarMedia from "./parts/sidebarMedia"

setConfiguration({ containerWidths: [540, 750, 960, 1200] })

const Post = ({ footerMenus, headerMenus, pageContext }) => {
  const customers = useAllCustomers()
  const testimonials = useAllTestimonials()

  if (!pageContext) return null

  const { author, date, detailedFooter, featuredImage, title } = pageContext
  const { categories, seo } = pageContext
  const acf = pageContext?.PostFields
  const acfAuthor = acf?.author
  const avatar = acf?.avatar

  const foldData = {
    avatar,
    author: acfAuthor ? acfAuthor : author.name,
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
      {hasCategory && <Category category={category} />}
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
      {hasGallery && <Gallery galleryItems={acf.gallery.slice(0, 5)} />}
      {hasContinued && (
        <Container>
          <Row>
            <Hidden xs sm>
              <Col md={4}>
                {acf.sidebarMedia && <SidebarMedia items={acf.sidebarMedia} />}
              </Col>
            </Hidden>
            <Col md={7} offset={{ md: 1 }}>
              {acf.contentContinued && (
                <article>{ParseHTML(acf.contentContinued)}</article>
              )}
            </Col>
          </Row>
        </Container>
      )}
      <Share
        title={foldData.title}
        url={`${process.env.GATSBY_DOMAIN}/${pageContext.slug}`}
      />
      {hasRelated && (
        <>
          <Container>
            <Row>
              <Col>
                <h2>Continue Reading Our Chronicles</h2>
              </Col>
            </Row>
          </Container>
          <Archive
            archivePage={false}
            posts={acf.relatedPosts}
            showDescription={true}
          />
        </>
      )}
      {detailedFooter && <Testimonials {...testimonials} />}
      {detailedFooter && <Customers {...customers} />}
      <Footer menus={footerMenus} />
    </>
  )
}

export default Post
