import React, { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

import StyledHero from "./hero.styles"

import ParseHTML from "particles/parseHTML"

import Heading from "atoms/heading/heading"
import Link from "atoms/link/link"
import Video from "atoms/video/video"

const inViewConfig = {
  threshold: 0.5,
  triggerOnce: true,
}

const Hero = ({
  backgroundColour,
  children,
  content,
  image,
  index,
  title,
  video,
}) => (
  <StyledHero
    backgroundColour={backgroundColour}
    className="hero"
    data-index={index}
  >
    {(content || children || title) && (
      <HeroContent
        children={children}
        content={content}
        index={index}
        title={title}
      />
    )}
    {image && <HeroImage image={image} />}
    {video && <Video className="hero__video" video={video.mediaItemUrl} />}
  </StyledHero>
)

const HeroContent = ({ children, content, index, title }) => {
  const [start, setStart] = useState(false)
  const [ref, inView, entry] = useInView(inViewConfig)

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), 1000)
    return () => clearTimeout(timer)
  }, [inView])

  const bodyClassName = !start ? `hero__body` : `hero__body hero__body--show`

  return (
    <div className="grid">
      <div className="hero__contents" ref={ref}>
        <div className={bodyClassName}>
          {title && (
            <Heading level={1} title={true}>
              {title}
            </Heading>
          )}
          {children ? children : ParseHTML(content)}
        </div>
      </div>
    </div>
  )
}

const HeroImage = ({ image }) => {
  const sizes = image?.mediaDetails?.sizes
  if (!sizes) return null
  const hasSizes = sizes.length > 0
  if (!hasSizes) return null
  const sortedSizes = sizes.sort((a, b) => b.width - a.width)
  const smartSizes = sortedSizes.map((curr, i, array) => {
    if (i === array.length - 1) return curr
    curr = {
      ...curr,
      query: array[i + 1].width,
    }
    return curr
  })
  const hasSmartSizes = smartSizes.length > 0
  if (!hasSmartSizes) return null

  return (
    <div className="hero__image">
      <picture>
        {smartSizes.map(
          image =>
            image.query && (
              <source
                srcset={image.sourceUrl}
                media={`(min-width: ${image.query}px)`}
              />
            )
        )}
        <img src={image.sourceUrl} alt={image.altText} />
      </picture>
    </div>
  )
}

export default Hero
