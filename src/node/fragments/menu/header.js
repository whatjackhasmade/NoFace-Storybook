const gql = require(`graphql-tag`)

const MENU_HEADER = gql`
  query MENU_HEADER {
    menus(where: { location: PRIMARY }) {
      nodes {
        id
        name
        slug
        menuItems {
          nodes {
            id
            label
            target
            title
            url
          }
        }
      }
    }
  }
`

module.exports = MENU_HEADER
