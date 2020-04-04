const grid = require(`../block/grid`)
const hero = require(`../block/hero`)
const services = require(`../block/services`)
const signposts = require(`../block/signposts`)

const GET_POSTS = `
  query GET_POSTS($first: Int) {
    wordpress {
      posts(first: $first) {
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
          content
          date
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
          slug
          uri
          title
        }
      }
    }
  }
`

module.exports = GET_POSTS
