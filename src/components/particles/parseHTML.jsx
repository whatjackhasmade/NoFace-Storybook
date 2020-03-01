import React from "react"
import Parser from "html-react-parser"

import Link from "atoms/link/link"

const config = {
  replace: data => {
    const { attribs } = data
    if (attribs && attribs.href) {
      const { children, href } = attribs

      if (children && href)
        return (
          <Link {...attribs} href={href}>
            {children}
          </Link>
        )
    }
  },
}

export const ParseHTML = html => {
  const isValid = typeof html === `string`
  if (!isValid) return html
  const clean = Parser(html, config)
  return clean
}

export default ParseHTML
