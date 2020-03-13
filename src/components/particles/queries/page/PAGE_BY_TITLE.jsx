import { gql } from "@apollo/client"

const PAGE_BY_TITLE = gql`
  query PAGE_BY_TITLE($title: String!) {
    pages(where: { title: $title }) {
      nodes {
        id
        title
        blocks {
          name
          originalContent
          ... on AcfGridBlock {
            acf {
              rows {
                basic
                body
                content
                subtitle
                title
              }
              title
            }
          }
        }
      }
    }
  }
`

export default PAGE_BY_TITLE
