import React from "react"
import Link from "gatsby-link"
import { bool, func, node, string } from "prop-types"
import { isInternal, relativeURL } from "helpers"

const AnchorLink = ({
  children,
  className,
  disabled,
  href,
  onClick,
  rel,
  target,
}) => {
  if (!children) return null
  if (!href) href = `/`
  if (typeof href !== `string`) {
    console.error(
      `Anchor link component passed href value of type ${typeof href}`
    )
    return null
  }

  href = relativeURL(href)

  // If the URL isn't internal, return an anchor tag
  if (!isInternal(href))
    return (
      <a
        className={className}
        href={href}
        onClick={onClick}
        target={target}
        rel={target === `_blank` ? `noopener norefferer` : null}
      >
        <>{children}</>
      </a>
    )

  href = href.startsWith(`/`) ? href : `/` + href

  // Otherwise, use the Gatsby Link component
  return (
    <Link className={className} onClick={onClick} to={href}>
      <>{children}</>
    </Link>
  )
}

// Expected prop values
AnchorLink.propTypes = {
  children: node.isRequired,
  disabled: bool.isRequired,
  href: string,
  onClick: func,
  rel: string,
  target: string,
}

AnchorLink.defaultProps = {
  disabled: false,
}

export default AnchorLink
