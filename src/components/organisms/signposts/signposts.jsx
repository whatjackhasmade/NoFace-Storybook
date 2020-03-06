import React from "react"

import StyledSignPosts from "./signposts.styles"

import CTA from "atoms/cta/cta"
import Link from "atoms/link/link"

const SignPosts = ({ items }) => {
  const hasItems = items && items.length > 0
  if (!hasItems) return null

  return (
    <StyledSignPosts>
      <div className="grid">
        <div className="signposts__contents">
          {items.map(item => (
            <SignPost {...item} />
          ))}
        </div>
      </div>
    </StyledSignPosts>
  )
}

const SignPost = ({ description, image, link, title, video }) => {
  const hasMedia = image || video
  return (
    <div className="signpost">
      <div className="signpost__content">
        {title && <h3 className="signpost__title">{title}</h3>}
        {description && <p className="signpost__description">{description}</p>}
        {link && (
          <CTA href={link.url} target={link.target}>
            {link.title}
          </CTA>
        )}
      </div>
      {hasMedia && (
        <div className="signpost__media">{image && <img src={image} />}</div>
      )}
      {link && (
        <Link className="signpost__link" href={link.url} target={link.target}>
          <span className="hide">{link.title}</span>
        </Link>
      )}
    </div>
  )
}

export default SignPosts
