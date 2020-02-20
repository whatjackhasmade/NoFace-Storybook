import React from "react"
import { string } from "prop-types"

import ParseHTML from "@particles/parseHTML"

const Paragraph = ({ children, className, innerHTML }) => (
  <p className={className}>{innerHTML ? ParseHTML(innerHTML) : children}</p>
)

// Expected prop values
Paragraph.propTypes = {
  children: string,
  className: string,
  innerHTML: string,
}

// Default prop values
Paragraph.defaultProps = {}

export default Paragraph
