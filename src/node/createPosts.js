const path = require(`path`)
const timeLog = require(`./functions/helpers/timeLog`)

const GET_POSTS = require(`./fragments/gatsby/GET_POSTS`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      return data.wordpress.posts.nodes
    })

  await fetchPosts({ first: 500 }).then(allPosts => {
    allPosts.map(post => {
      timeLog(`Creating Post: ${post.uri}`)

      if (post.status !== `publish`) return null

      actions.createPage({
        path: post.uri,
        component: path.resolve(
          `./storybook/src/components/templates/post/post.jsx`
        ),
        context: {
          ...post,
          slug: post.uri,
        },
      })
    })
  })
}
