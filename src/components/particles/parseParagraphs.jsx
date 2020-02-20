import React from "react"
import Parser, { domToReact } from "html-react-parser"

const config = {
  replace: ({ attribs, children, name }) => {
    if (!attribs) return

    if (name === "p") {
      return <p>{domToReact(children, config)}</p>
    }

    return <React.Fragment />
  },
}

export const ParseParagraphs = html => {
  const clean = Parser(html, config)
  return clean
}

export default ParseParagraphs
