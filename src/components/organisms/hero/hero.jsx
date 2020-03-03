import React from "react"

import StyledHero from "./hero.styles"

import Link from "atoms/link/link"

const Hero = ({ children, image, video }) => {
  return (
    <StyledHero className="hero">
      <div className="hero__contents">
        <div className="grid">{children}</div>
      </div>
      {image && <HeroImage image={image} />}
      {video && <HeroVideo video={video} />}
    </StyledHero>
  )
}

const HeroImage = ({ image }) => {
  const sizes = image?.mediaDetails?.sizes
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

const HeroVideo = ({ video }) => (
  <video className="hero__video" autoPlay loop muted>
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
)

export default Hero
