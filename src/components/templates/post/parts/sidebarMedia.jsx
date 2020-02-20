import React from "react"

import StlyedSidebarMedia from "./sidebarMedia.styles"

const SidebarMedia = ({ items = [] }) => (
  <StlyedSidebarMedia className="sidebarMedia">
    {items !== [] &&
      items.map(item => (
        <SidebarMediaItem {...item} key={`sidebar-media-${item.xl}`} />
      ))}
  </StlyedSidebarMedia>
)

const SidebarMediaItem = ({ altText, xl }) => (
  <div className="sidebarMedia__item">
    <img alt={altText} src={xl} />
  </div>
)

export default SidebarMedia
