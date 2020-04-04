const path = require(`path`)
const timeLog = require(`./functions/helpers/timeLog`)

const GET_PAGES = require(`./fragments/gatsby/GET_PAGES`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      return data.wordpress.pages.nodes
    })

  await fetchPages({ first: 500 }).then(allPages => {
    allPages.map(page => {
      timeLog(`Creating Page: ${page.uri}`)

      const { isFrontPage } = page
      const uri = isFrontPage ? `/` : `/${page.uri}`

      actions.createPage({
        path: uri,
        component: path.resolve(
          `./storybook/src/components/templates/page/page.jsx`
        ),
        context: {
          ...page,
        },
      })
    })
  })
}
