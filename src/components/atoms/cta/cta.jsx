import React from "react"

import StyledCTA from "./cta.styles"

import Link from "atoms/link/link"

const CTA = ({ children, className, href, target }) => (
  <StyledCTA>
    {href && (
      <Link className={className} href={href} target={target}>
        {children}
      </Link>
    )}
    {!href && <span className={className}>{children}</span>}
  </StyledCTA>
)

export default CTA
