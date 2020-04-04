const frag = `
fragment SignpostsData on WORDPRESS_AcfSignpostsBlock {
  signpostsFields: acf {
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
        ... on WORDPRESS_Page {
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
        ... on WORDPRESS_Post {
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
`

module.exports = frag
