const grid = require(`../block/grid`)
const hero = require(`../block/hero`)
const services = require(`../block/services`)
const signposts = require(`../block/signposts`)

const GET_PAGES = `
  query GET_PAGES($first: Int) {
    wordpress {
      pages(first: $first) {
        nodes {
          id
          blocks {
            name
            originalContent
            ... on WORDPRESS_AcfGridBlock {
              ${grid}
            }
            ... on WORDPRESS_AcfHeroBlock {
              ${hero}
            }
            ... on WORDPRESS_AcfServicesBlock {
              ${services}
            }
          }
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
          isFrontPage
          seo {
            title
            focuskw
            metaDesc
            metaKeywords
            opengraphDescription
            opengraphImage {
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
            opengraphTitle
            twitterDescription
            twitterImage {
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
            twitterTitle
          }
          status
          title
          uri
        }
      }
    }
  }
`

module.exports = GET_PAGES
