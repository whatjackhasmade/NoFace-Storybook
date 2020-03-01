import React from "react"

import ParseHTML from "particles/parseHTML"

const Paragraph = ({ children, className, innerHTML }) => (
  <p className={className}>{innerHTML ? ParseHTML(innerHTML) : children}</p>
)

export default Paragraph
