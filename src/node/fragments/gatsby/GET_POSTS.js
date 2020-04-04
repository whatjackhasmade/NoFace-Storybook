const grid = require(`../block/grid`)
const hero = require(`../block/hero`)
const services = require(`../block/services`)
const signposts = require(`../block/signposts`)

const media = require(`../media/media`)

const seo = require(`../object/seo`)

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
            ${media}
          }
          seo {
            ${seo}
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
