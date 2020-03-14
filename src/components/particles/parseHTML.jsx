import React from "react"
import he from "he"
import Parser from "html-react-parser"
import widont from "widont"

import Link from "atoms/link/link"

const config = {
  replace: data => {
    const { attribs, children, name, type } = data
    if (name === `p` && children) {
      const hasChildren = children.length > 0
      children.map(child => {
        const { data, type } = child
        if (type === `text`) {
          return <p>{he.decode(widont(data, `html`))}</p>
        }
      })
    }

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
