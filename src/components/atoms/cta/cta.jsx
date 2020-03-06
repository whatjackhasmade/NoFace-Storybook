import React from "react"

import StyledCTA from "./cta.styles"

import Link from "atoms/link/link"

const CTA = ({ children, className, href, target }) => (
  <StyledCTA>
    <Link className={className} href={href} target={target}>
      {children}
    </Link>
  </StyledCTA>
)

export default CTA
