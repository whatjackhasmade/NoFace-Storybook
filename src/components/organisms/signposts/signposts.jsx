import React, { useRef } from "react"
import he from "he"
import { useInView } from "react-intersection-observer"
import { generateID } from "helpers"

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
            <SignPost key={item.id ? item.id : generateID()} {...item} />
          ))}
        </div>
      </div>
    </StyledSignPosts>
  )
}

const SignPost = props => {
  const { custom_details: isCustom, page } = props
  let { description, image, link, title, video } = props

  const defaultSEO = page?.seo?.metaDesc
  const defaultImage = page?.featuredImage
  const defaultTitle = page?.title
  const defaultLink = {
    target: null,
    title: `Continue reading `,
    url: `/${page?.slug}`,
  }
  const defaultVideo = null

  description = description ? description : defaultSEO ? defaultSEO : ``
  image = image ? image : defaultImage
  link = link?.title ? link : defaultLink
  title = title ? title : defaultTitle
  video = video ? video : defaultVideo

  const [ref, inView, entry] = useInView(inViewConfig)
  const hasMedia = image || video

  return (
    <div className="signpost" ref={ref}>
      <div className="signpost__content">
        {title && <h3 className="signpost__title">{he.decode(title)}</h3>}
        {description && (
          <p className="signpost__description">{he.decode(description)}</p>
        )}
        {link && <CTA>{he.decode(link.title)}</CTA>}
      </div>
      {hasMedia && (
        <div className="signpost__media">
          {image && <img src={image.sourceUrl} alt={image.altText} />}
          {inView && video && (
            <Video className="signpost__video" video={video.mediaItemUrl} />
          )}
        </div>
      )}
      {link && (
        <Link className="signpost__link" href={link.url} target={link.target}>
          <span className="hide">{he.decode(link.title)}</span>
        </Link>
      )}
    </div>
  )
}

export default SignPosts
