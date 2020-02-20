import React from "react"

import StyledGallery from "./gallery.styles"

const Gallery = ({ galleryItems = [] }) => (
  <StyledGallery className="blog__gallery">
    {galleryItems.map(item => (
      <GalleryItem key={item.xl} {...item} />
    ))}
  </StyledGallery>
)

const GalleryItem = ({ altText, xl }) => (
  <div className="gallery__item">
    <img alt={altText} src={xl} />
  </div>
)

export default Gallery
