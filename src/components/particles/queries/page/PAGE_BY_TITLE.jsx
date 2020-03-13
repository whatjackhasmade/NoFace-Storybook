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
            gridFields: acf {
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
          ... on AcfHeroBlock {
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
          ... on AcfServicesBlock {
            servicesFields: acf {
              services {
                colour
                description
                link {
                  target
                  title
                  url
                }
                title
                type
              }
              subtitle
              title
            }
          }
          ... on AcfSignpostsBlock {
            servicesFields: acf {
              items {
                custom_details
                description
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
                link {
                  target
                  title
                  url
                }
                page {
                  ... on Page {
                    id
                    featuredImage {
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
                    seo {
                      metaDesc
                    }
                    slug
                    title
                  }
                  ... on Post {
                    id
                    featuredImage {
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
                    seo {
                      metaDesc
                    }
                    slug
                    title
                  }
                }
                title
                video {
                  mediaItemUrl
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PAGE_BY_TITLE
