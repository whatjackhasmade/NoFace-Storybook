const frag = `
fragment HeroData on WORDPRESS_AcfHeroBlock {
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
}
`

module.exports = frag
