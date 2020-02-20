import React from "react"
import Helmet from "react-helmet"
import { useQuery } from "@apollo/react-hooks"
import { Container, Row, Col, setConfiguration } from "react-grid-system"
import { firstName, hideName } from "@helpers"

import SINGLE_ARTIST_QUERY from "@queries/artist/SINGLE_ARTIST_QUERY"
import ACCOUNT_USER_SERVICES_QUERY from "@queries/user-service/ACCOUNT_USER_SERVICES_QUERY"

import ArtistTreatments from "./artists.treatments"
import ArtistWrapper from "./artists.wrapper"

import Heading from "@atoms/heading/heading"
import Link from "@atoms/link/link"

import Error from "@molecules/error/error"
import Loader from "@molecules/loader/loader"

import Fold from "@organisms/fold/fold"
import Footer from "@organisms/footer/footer"
import GridGallery from "@organisms/grid/gridGallery"
import Header from "@organisms/header/header"
import MetaIntro from "@organisms/meta-intro/metaIntro"

setConfiguration({ containerWidths: [540, 750, 960, 1200] })

const validPortfolio = portfolios =>
  portfolios.length > 0 && portfolios[0].media.length > 0

const ArtistPortfolio = props => {
  const id = props?.pageContext?.id
  // Live query latest portfolio
  const { data, error, loading } = useQuery(SINGLE_ARTIST_QUERY, {
    variables: { id },
  })
  if (loading) return <Loader fullscreen />
  if (error) return <Error error={error} />
  return <ArtistServices {...props} portfolio={data} />
}

const ArtistServices = props => {
  const id = props?.pageContext?.id
  // Live query latest user services
  const { data, error, loading } = useQuery(ACCOUNT_USER_SERVICES_QUERY, {
    variables: { user: id },
  })
  if (loading) return <Loader fullscreen />
  if (error) return <Error error={error} />
  return <ArtistTemplate {...props} services={data} />
}

const ArtistTemplate = props => {
  const { data, footerMenus, headerMenus, pageContext } = props
  const { portfolio, services } = props
  const { name, cover, id, bio } = pageContext
  const portfolios = portfolio || []
  const mappedPortfolio = validPortfolio(portfolios)
    ? portfolios[0].media.map(({ url }) => ({ url, xl: url }))
    : []

  return (
    <>
      <Header menus={headerMenus} />
      <Helmet defer={false}>
        <title>{`Makeup and Mane - ${hideName(name)}`}</title>
      </Helmet>
      {cover && (
        <Fold background={cover} height="500px" overlay={false}>
          <span />
        </Fold>
      )}
      <ArtistWrapper>
        <Container>
          <Row>
            <Col lg={4}>
              <nav className="breadcrumbs">
                <Link to="/meet-the-artists">Artists</Link>
                <Heading level={1} variant={2}>
                  {hideName(name)}
                </Heading>
              </nav>
              <MetaIntro
                cta={
                  process.env.GATSBY_ENABLE_BOOKING !== `false` && {
                    href: `/book?artist=${id}`,
                    text: `Book with ${hideName(name)}`,
                  }
                }
              >
                <p>{bio}</p>
              </MetaIntro>
            </Col>
            <Col lg={6} offset={{ lg: 2 }}>
              {mappedPortfolio.length > 0 && (
                <>
                  <Heading level={2} className="artist__portfolio__title">
                    {firstName(name)}'s Portfolio
                  </Heading>
                  <GridGallery gallery={mappedPortfolio} type="tripple" />
                </>
              )}
            </Col>
          </Row>
          {process.env.GATSBY_ENABLE_BOOKING !== `false` && (
            <Row>
              <Col>
                <ArtistTreatments services={services} name={firstName(name)} />
              </Col>
            </Row>
          )}
        </Container>
      </ArtistWrapper>
      <Footer menus={footerMenus} />
    </>
  )
}

export default ArtistPortfolio
