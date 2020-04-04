const grid = require(`../block/grid`)
const hero = require(`../block/hero`)
const services = require(`../block/services`)
const signposts = require(`../block/signposts`)

const media = require(`../media/media`)

const seo = require(`../object/seo`)

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
            ... on WORDPRESS_AcfSignpostsBlock {
              ${signposts}
            }
          }
          featuredImage {
            ${media}
          }
          isFrontPage
          seo {
            ${seo}
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
