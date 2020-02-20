const path = require(`path`)

module.exports = ({ config }) => {
  let rule = config.module.rules.find(
    r =>
      // it can be another rule with file loader
      // we should get only svg related
      r.test &&
      r.test.toString().includes("svg") &&
      // file-loader might be resolved to js file path so "endsWith" is not reliable enough
      r.loader &&
      r.loader.includes("file-loader")
  )
  rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

  config.module.rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  })

  config.module.rules.unshift({
    test: /\.js$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: ["react-app"],
        },
      },
    ],
    include: [
      path.join(path.dirname(__dirname), "node_modules/gatsby/cache-dir"),
    ],
  })

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      assets: resolve(__dirname, `./assets`),
      atoms: resolve(__dirname, `./components/atoms`),
      components: resolve(__dirname, `./components`),
      helpers: resolve(__dirname, `./components/helpers`),
      molecules: resolve(__dirname, `./components/molecules`),
      organisms: resolve(__dirname, `./components/organisms`),
      pages: resolve(__dirname, `./components/pages`),
      particles: resolve(__dirname, `./components/particles`),
      templates: resolve(__dirname, `./components/templates`),
    },
  }

  return config
}
