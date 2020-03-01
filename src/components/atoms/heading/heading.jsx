import React from "react"
import { string, node, number } from "prop-types"
import ParseHTML from "particles/parseHTML"

const Heading = ({ className, children, innerHTML, level, variant }) => {
  level = parseInt(level)
  const HeadingTag = `h${level}`

  var classList = `heading `
  if (className) classList = classList + className
  if (variant) classList = classList + ` h${variant}`

  if (innerHTML) return ParseHTML(innerHTML)

  return <HeadingTag className={classList}>{children}</HeadingTag>
}

// Expected prop values
Heading.propTypes = {
  className: string,
  children: node,
  innerHTML: string,
  level: number,
  variant: number,
}

// Default prop values
Heading.defaultProps = {
  level: 2,
}

export default Heading
