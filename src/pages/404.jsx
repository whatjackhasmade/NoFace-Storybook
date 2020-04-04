import React from "react"
import Img from "gatsby-image"

import Styled404 from "particles/styles/pages/404.styles"

import Link from "atoms/link/link"

export default () => {
  return (
    <Styled404>
      <section className="page__content">
        <h1 className="hidden">404</h1>
        <Link href="/">
          <h2>We couldn't find that page</h2>
        </Link>
        <Link href="/">Return to the homepage</Link>
      </section>
    </Styled404>
  )
}
