import React from "react"

import StyledArtist from "./artists.wrapper.styles"

function ArtistWrapper({ children }) {
  return <StyledArtist className="artist">{children}</StyledArtist>
}

export default ArtistWrapper
