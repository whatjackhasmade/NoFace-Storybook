import React, { useRef } from "react"
import { useInView } from "react-intersection-observer"

import StyledSignPosts from "./signposts.styles"

import CTA from "atoms/cta/cta"
import Link from "atoms/link/link"
import Video from "atoms/video/video"

const inViewConfig = {
  threshold: 0,
  triggerOnce: true,
}

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
  const [ref, inView, entry] = useInView(inViewConfig)
  const hasMedia = image || video

  return (
    <div className="signpost" ref={ref}>
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
        <div className="signpost__media">
          {image && <img src={image} />}
          {inView && video && (
            <Video className="signpost__video" video={video} />
          )}
        </div>
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
