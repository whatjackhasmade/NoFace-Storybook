const gql = require(`graphql-tag`)

const media = gql`
  {
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
`

module.exports = media
