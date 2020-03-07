import React, { useRef } from "react"
import { useInView } from "react-intersection-observer"

import StyledBrands from "./brands.styles"

import IconSquares from "./assets/squares.svg"

import Link from "atoms/link/link"

const inViewConfig = {
  threshold: 0.5,
  triggerOnce: true,
}

const Brands = ({ images }) => {
  images = [{ href: "#" }, { href: "#" }, { href: "#" }, { href: "#" }]
  const hasItems = images && images.length > 0
  if (!hasItems) return null

  return (
    <StyledBrands className="brands">
      <div className="grid">
        <div className="brands__contents">
          {images.map((image, i) => (
            <SingleBrand {...image} key={`brand-${i}`} />
          ))}
        </div>
      </div>
    </StyledBrands>
  )
}

const SingleBrand = ({ altText = ``, href }) => {
  if (href) {
    return (
      <Link className="brand" href={href}>
        <IconSquares />
        <span className="hidden">{altText}</span>
      </Link>
    )
  }

  return (
    <div className="brand">
      <IconSquares />
      <span className="hidden">{altText}</span>
    </div>
  )
}

export default Brands
