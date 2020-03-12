import React from "react"
import Parser from "html-react-parser"
import widont from "widont"

import Link from "atoms/link/link"

const config = {
  replace: data => {
    const { attribs, children, type } = data
    if (name === `p`) return widont(children, `html`) // Experimental

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
