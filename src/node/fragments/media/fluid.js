const gql = require(`graphql-tag`)

const fluid = gql`
  {
    imageFile {
      childImageSharp {
        fluid {
          aspectRatio
          base64
          sizes
          src
          srcSet
        }
      }
    }
  }
`

module.exports = fluid
