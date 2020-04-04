const frag = `
heroFields: acf {
  backgroundColour
  image {
    altText
    mediaDetails {
      sizes {
        file
        height
        mimeType
        name
        sourceUrl
        width
      }
    }
    sourceUrl
  }
  content
  title
  video {
    mediaItemUrl
  }
}
`

module.exports = frag
